import {
  Grid,
  Box,
  Paper,
  TextField,
  Fab,
  Backdrop,
  Button,
} from "@material-ui/core";
import { Add, Check } from "@material-ui/icons";
import getInfo from "api/account/get";
import getCards from "api/get";
import BusinessCard from "components/molecules/BusinessCard";
import CardAddModal from "components/molecules/CardAddModal";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Info = () => {
  const [accountInfo, setAccountInfo] = useState({});
  const [cardList, setCardList] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      company: accountInfo.company,
      department: accountInfo.department,
      mail: accountInfo.rank,
      name: accountInfo.name,
      phone: accountInfo.phone,
      rank: accountInfo.mail,
    },
  });

  const onSubmit = handleSubmit((data) => {
    // TODO implement POST proccess
  });

  const getAccountInfo = async () => {
    const res = await getInfo();
    setAccountInfo(res.data);
  }
  const getCardList = async () => {
    const res = await getCards();
    setCardList(res.data);
  }

  useEffect(() => {
    getAccountInfo();
    getCardList();
  }, []);

  useEffect(() => {
      setValue("company", accountInfo.company);
      setValue("department", accountInfo.department);
      setValue("rank", accountInfo.rank);
      setValue("name", accountInfo.name);
      setValue("phone", accountInfo.phone);
      setValue("mail", accountInfo.mail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountInfo]);

  return (
    <>
      <Box pt={8}>
        {/* 自分の情報 */}
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

        {/* 自分の名刺一覧 */}
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
        title={"あなたの名刺を追加"}
        open={isOpenModal}
        setIsOpen={setIsOpenModal}
      />
      <Backdrop
        style={{zIndex: 9999}}
        open={Object.keys(accountInfo).length === 0 || cardList.length === 0}
      />
    </>
  );
};

export default Info;
