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
  image = "",
  handleOnClose = () => {},
  handleOnChangeImage = () => {},
}) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={handleOnClose}>
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
                //   handleOnSubmit()
                handleOnClose();
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
                handleOnClose();
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
