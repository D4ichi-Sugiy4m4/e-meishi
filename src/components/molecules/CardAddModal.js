import {
  Box,
  Button,
  CardMedia,
  Dialog,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { Cancel, Check } from "@material-ui/icons";
import AddImageButton from "components/atoms/AddImageButton";
import React from "react";
import { useRecoilState } from "recoil";
import { CardAddModalState } from "store/CardAddModal";

const useStyles = makeStyles({
  media: {
    height: "100%",
    aspectRatio: "8/5",
    backgroundSize: "contain",
  },
});

const CardAddModal = ({
  title = "",
  open = false,
}) => {
  const classes = useStyles();

  const [modal, setModal] = useRecoilState(CardAddModalState)

  const handleOnChangeImage = async (e) => {
    const { files } = e.target;
    setModal({
      ...modal,
      image: window.URL.createObjectURL(files[0])
    });
  };

  return (
    <Dialog open={open} onClose={() => {
      
    }}>
      <Box p={2}>
        <Typography>{title}</Typography>
        {modal.image === "" ? (
          <AddImageButton
            onChange={(e) => {
              handleOnChangeImage(e);
            }}
          />
        ) : (
          <>
            <Button variant="contained" component="label">
              画像を変更
              <input
                accept="image/*"
                id={"upload-button"}
                type="file"
                hidden
                onChange={(e) => {
                  handleOnChangeImage(e);
                }}
              />
            </Button>
            <CardMedia image={modal.image} className={classes.media} />
          </>
        )}
      </Box>
      <Box p={2} justifyContent={"end"}>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              startIcon={<Check />}
              variant={"contained"}
              color={"primary"}
              disabled={modal.image === ""}
              onClick={() => {
                setModal({
                  ...modal,
                  isOpen: false,
                  image: "",
                })
              }}
            >
              追加
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
                  image: "",
                })
              }}
            >
              キャンセル
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};

export default CardAddModal;
