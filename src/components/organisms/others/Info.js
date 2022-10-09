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
import BusinessCard from "components/molecules/BusinessCard";
import CardAddModal from "components/molecules/CardAddModal";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { CardAddModalState } from "store/CardAddModal";
import { useCardList } from "store/CardList";
import { useOthersApi, useOthersState } from "store/others/Others";

const Info = () => {
  const othersInfo = useRecoilValueLoadable(useOthersApi);
  const [items, setItems] = useRecoilState(useOthersState);
  const cardList = useRecoilValueLoadable(useCardList);
  const [modal, setModal] = useRecoilState(CardAddModalState);

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      company: "",
      department: "",
      mail: "",
      name: "",
      phone: "",
      rank: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    setItems((prevState) => ({
      ...prevState,
      ...{
        company: data.company,
        department: data.department,
        mail: data.mail,
        name: data.name,
        phone: data.phone,
        rank: data.rank,
      },
    }));
  });

  useEffect(() => {
    if (othersInfo.state === "hasValue") {
      setItems(othersInfo.getValue().data);
      setValue("company", othersInfo.getValue().data.company)
      setValue("department", othersInfo.getValue().data.department)
      setValue("rank", othersInfo.getValue().data.rank)
      setValue("name", othersInfo.getValue().data.name)
      setValue("phone", othersInfo.getValue().data.phone)
      setValue("mail", othersInfo.getValue().data.mail)
    }
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
                    {...register("company")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label={"部署"}
                    {...register("department")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label={"役職"}
                    {...register("rank")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label={"名前"}
                    {...register("name")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label={"電話番号"}
                    {...register("phone")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label={"メールアドレス"}
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
            {cardList.getValue().data.map((card, index) => (
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
          setModal({ ...modal, isOpen: true });
          setItems({
            company: "",
            department: "",
            mail: "",
            name: "",
            phone: "",
            rank: "",
          });
        }}
      >
        <Add />
      </Fab>

      <CardAddModal
        title={`${items.name}さんの名刺を追加`}
        open={modal.isOpen}
      />
      <Backdrop
        open={othersInfo.state === "loading" || cardList.state === "loading"}
      />
    </>
  );
};

export default Info;
