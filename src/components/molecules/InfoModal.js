import React from "react";
import {
  Box,
  Button,
  Grid,
  Dialog,
  TextField,
  Typography,
} from "@material-ui/core";
import { Cancel, Check } from "@material-ui/icons";
import { useForm } from "react-hook-form";

const InfoModal = ({ title = "", open = false, setIsOpen = () => {} }) => {

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      company: "",
      department: "",
      rank: "",
      name: "",
      phone: "",
      mail: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    // TODO POST送信処理
  });

  const clearFormData = () => {
    setValue("company", "");
    setValue("department", "");
    setValue("rank", "");
    setValue("name", "");
    setValue("phone", "");
    setValue("mail", "");
  };

  return (
    <Dialog
      open={open}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <Box p={2}>
        <Typography>{title}</Typography>
      </Box>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item>
            <TextField label={"会社名"} {...register("company")} />
          </Grid>
          <Grid item>
            <TextField label={"部署"} {...register("department")} />
          </Grid>
          <Grid item>
            <TextField label={"役職"} {...register("rank")} />
          </Grid>
          <Grid item>
            <TextField label={"名前"} {...register("name")} />
          </Grid>
          <Grid item>
            <TextField label={"電話番号"} {...register("phone")} />
          </Grid>
          <Grid item>
            <TextField label={"メールアドレス"} {...register("mail")} />
          </Grid>
        </Grid>
      </Box>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              startIcon={<Check />}
              variant={"contained"}
              color={"primary"}
              onClick={() => {
                onSubmit();
                setIsOpen(false);
                clearFormData();
              }}
            >
              {"追加"}
            </Button>
          </Grid>
          <Grid item>
            <Button
              startIcon={<Cancel />}
              variant={"contained"}
              color={"secondary"}
              onClick={() => {
                setIsOpen(false);
                clearFormData();
              }}
            >
              {"キャンセル"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};

export default InfoModal;
