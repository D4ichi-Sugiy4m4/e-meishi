import React from "react";
import { Box, Button, Grid, Dialog, TextField, Typography } from "@material-ui/core";

const InfoModal = ({
  title = "",
  open = false,
  actions = [],
  labels = [],
  items = {},
  setItems = () => {},
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
        <Grid container spacing={2}>
          {Object.keys(items).map((item, index) => (
            <Grid item>
              <TextField
                label={labels[index]}
                onChange={(e) => {
                  setItems((prevState) => ({
                    ...prevState,
                    [item]: e.target.value
                  }))
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box p={2}>
        <Grid container spacing={2}>
          {actions.map((action) => (
            <Grid item>
              <Button
                startIcon={action.icon}
                variant={action.variant}
                color={action.color}
                onClick={() => {
                  handleOnSubmit()
                  handleOnClose()
                }}
              >
                {action.title}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Dialog>
  );
};

export default InfoModal;