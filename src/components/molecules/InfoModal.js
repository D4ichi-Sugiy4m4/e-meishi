import React from "react";
import { Box, Button, Grid, Dialog, TextField, Typography } from "@material-ui/core";
import { Cancel, Check } from "@material-ui/icons";


const InfoModal = ({
  title = "",
  open = false,
  handleOnClose = () => {},
  handleOnSubmit = () => {},
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleOnClose}
    >
      <Box p={2}>
        <Typography>
          {title}
        </Typography>
      </Box>
      <Box p={2}>
        <TextField>

        </TextField>
      </Box>
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              startIcon={<Check />}
              variant="contained"
              color="primary"
              onClick={() => {
                handleOnSubmit()
                handleOnClose()
              }}
            >
              追加
            </Button>
          </Grid>
          <Grid item>
            <Button
              startIcon={<Cancel />}
              variant="contained"
              color="secondary"
              onClick={handleOnClose}
            >
              キャンセル
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};

export default InfoModal;