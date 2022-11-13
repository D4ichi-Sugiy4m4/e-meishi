import {
  Backdrop,
  Box,
  Button,
  Fab,
  Grid,
  Paper,
  TextField,
} from "@material-ui/core";
import { Add, Check } from "@material-ui/icons";
import getInfo from "api/others/:othersId/get";
import getCards from "api/get";
import BusinessCard from "components/molecules/BusinessCard";
import CardAddModal from "components/molecules/CardAddModal";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Info = () => {
  const [othersInfo, setOthersInfo] = useState({});
  const [cardList, setCardList] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const getOthersInfo = async () => {
    const res = await getInfo();
    setOthersInfo(res.data);
  };
  const getCardList = async () => {
    const res = await getCards();
    setCardList(res.data);
  };

  useEffect(() => {
    getOthersInfo();
    getCardList();
  }, []);

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      company: othersInfo.company,
      department: othersInfo.department,
      mail: othersInfo.rank,
      name: othersInfo.name,
      phone: othersInfo.phone,
      rank: othersInfo.mail,
    },
  });

  const onSubmit = handleSubmit((data) => {
    // TODO implement POST proccess
  });

  useEffect(() => {
    setValue("company", othersInfo.company);
    setValue("department", othersInfo.department);
    setValue("rank", othersInfo.rank);
    setValue("name", othersInfo.name);
    setValue("phone", othersInfo.phone);
    setValue("mail", othersInfo.mail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [othersInfo]);

  return (
    <>
      <Box pt={8}>
        {/* 外部者情報 */}
        <Box p={1}>
          <Paper>
            <Box px={2} py={1}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    label={"会社名"}
                    InputLabelProps={{ shrink: true }}
                    {...register("company")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label={"部署"}
                    InputLabelProps={{ shrink: true }}
                    {...register("department")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label={"役職"}
                    InputLabelProps={{ shrink: true }}
                    {...register("rank")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label={"名前"}
                    InputLabelProps={{ shrink: true }}
                    {...register("name")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label={"電話番号"}
                    InputLabelProps={{ shrink: true }}
                    {...register("phone")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label={"メールアドレス"}
                    InputLabelProps={{ shrink: true }}
                    {...register("mail")}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box px={2} py={1}>
              <Button
                startIcon={<Check />}
                variant={"contained"}
                color={"primary"}
                onClick={onSubmit}
              >
                更新
              </Button>
            </Box>
          </Paper>
        </Box>

        {/* 外部者名刺一覧 */}
        <Box p={1}>
          <Grid container spacing={1}>
            {cardList?.map((card, index) => (
              <Grid key={`${index}_grid`} item xs={12}>
                <BusinessCard key={`${index}_card`} item={card} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Fab
        color="primary"
        style={{
          position: "fixed",
          bottom: "70px",
          right: "30px",
        }}
        onClick={() => {
          setIsOpenModal(true);
        }}
      >
        <Add />
      </Fab>

      <CardAddModal
        title={`${othersInfo.name}さんの名刺を追加`}
        open={isOpenModal}
        setIsOpen={setIsOpenModal}
      />

      <Backdrop
        style={{zIndex: 9999}}
        open={Object.keys(othersInfo).length === 0 || cardList.length === 0}
      />
    </>
  );
};

export default Info;
