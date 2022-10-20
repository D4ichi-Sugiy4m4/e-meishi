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
import BusinessCard from "components/molecules/BusinessCard";
import CardAddModal from "components/molecules/CardAddModal";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useRecoilState,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import { useAccountApi, useAccountState } from "store/account/Account";
import { CardAddModalState } from "store/CardAddModal";
import { useCardList } from "store/CardList";

const Info = () => {
  const accountInfo = useRecoilValueLoadable(useAccountApi);
  const setItems = useSetRecoilState(useAccountState);
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
    if (accountInfo.state === "hasValue") {
      setItems(accountInfo.getValue().data);
      setValue("company", accountInfo.getValue().data.company);
      setValue("department", accountInfo.getValue().data.department);
      setValue("rank", accountInfo.getValue().data.rank);
      setValue("name", accountInfo.getValue().data.name);
      setValue("phone", accountInfo.getValue().data.phone);
      setValue("mail", accountInfo.getValue().data.mail);
    }
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
                  <TextField label={"会社名"} {...register("company")} />
                </Grid>
                <Grid item xs={12}>
                  <TextField label={"部署"} {...register("department")} />
                </Grid>
                <Grid item xs={12}>
                  <TextField label={"役職"} {...register("rank")} />
                </Grid>
                <Grid item xs={12}>
                  <TextField label={"名前"} {...register("name")} />
                </Grid>
                <Grid item xs={12}>
                  <TextField label={"電話番号"} {...register("phone")} />
                </Grid>
                <Grid item xs={12}>
                  <TextField label={"メールアドレス"} {...register("mail")} />
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
        }}
      >
        <Add />
      </Fab>

      <CardAddModal title={"あなたの名刺を追加"} open={modal.isOpen} />
      <Backdrop
        open={accountInfo.state === "loading" || cardList.state === "loading"}
      />
    </>
  );
};

export default Info;
