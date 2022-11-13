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
import React, { useState } from "react";

const useStyles = makeStyles({
  media: {
    height: "100%",
    aspectRatio: "8/5",
    backgroundSize: "contain",
  },
});

const CardAddModal = ({ title = "", open = false, setIsOpen = () => {} }) => {
  const classes = useStyles();

  const [image, setImage] = useState("");

  const handleOnChangeImage = async (e) => {
    const { files } = e.target;
    setImage(window.URL.createObjectURL(files[0]));
  };

  return (
    <Dialog open={open} onClose={() => {}}>
      <Box p={2}>
        <Typography>{title}</Typography>
        {image === "" ? (
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
            <CardMedia image={image} className={classes.media} />
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
              disabled={image === ""}
              onClick={() => {
                setIsOpen(false);
                setImage("");
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
                setIsOpen(false);
                setImage("");
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
