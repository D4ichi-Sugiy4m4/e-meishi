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
import { useRecoilState } from "recoil";
import { OthersAddModalState } from "store/others/OthersAddModal";

const labels = ["会社名", "部署", "役職", "名前", "電話番号", "メールアドレス"];

const InfoModal = ({ title = "", open = false, state = {} }) => {
  const [modal, setModal] = useRecoilState(OthersAddModalState);

  return (
    <Dialog
      open={open}
      onClose={() => {
        setModal({
          isOpen: false,
          inputItems: {
            company: "",
            department: "",
            email: "",
            name: "",
            phone: "",
            rank: "",
          },
          inputImage: "",
        });
      }}
    >
      <Box p={2}>
        <Typography>{title}</Typography>
      </Box>
      <Box p={2}>
        <Grid container spacing={2}>
          {Object.keys(modal.inputItems).map((item, index) => (
            <Grid item>
              <TextField
                value={Object.values(modal.inputItems)[index]}
                label={labels[index]}
                onChange={(e) => {
                  setModal({
                    ...modal,
                    inputItems: {
                      ...modal.inputItems,
                      [item]: e.target.value,
                    },
                  });
                }}
              />
            </Grid>
          ))}
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
                setModal({
                  ...modal,
                  isOpen: false,
                  inputItems: {
                    company: "",
                    department: "",
                    email: "",
                    name: "",
                    phone: "",
                    rank: "",
                  }
                });
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
                setModal({
                  ...modal,
                  isOpen: false,
                  inputItems: {
                    company: "",
                    department: "",
                    email: "",
                    name: "",
                    phone: "",
                    rank: "",
                  }
                });
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
