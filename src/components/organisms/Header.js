import React, { useState, useRef } from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Avatar,
  IconButton,
  Box,
} from "@material-ui/core";
import LongMenu from "../molecules/LongMenu";
import { Menu } from "@material-ui/icons";
import DrawerMenu from "./DrawerMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "50px",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [MenuOpen, setMenuOpen] = useState(false);
  const anchorRef = useRef(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prevOpen) => !prevOpen);
  };
  const handleMenuClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }
    setMenuOpen(false);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen((prevOpen) => !prevOpen);
  };

  const actions = [
    {
      title: "自分の情報",
      color: "inherit",
      to: "/account",
      onClick: () => {
        setMenuOpen(false);
      },
    },
    {
      title: "ログアウト",
      color: "secondary",
      to: `/`,
      onClick: () => {},
    },
  ];

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.root}>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
            <Menu />
          </IconButton>
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant="h6">e名刺</Typography>
            </Grid>
            <Grid item>
              <Button
                color="inherit"
                variant="text"
                onClick={handleMenuToggle}
                ref={anchorRef}
              >
                <Avatar style={{ width: 24, height: 24, marginRight: 16 }}>
                  {"山"}
                </Avatar>
                <Typography>{"user"}さん</Typography>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: 240 },
          flexShrink: { sm: 0 },
        }}
      >
        <DrawerMenu open={drawerOpen} onClose={handleDrawerToggle} />
      </Box>
      <LongMenu
        open={MenuOpen}
        actions={actions}
        anchorEl={anchorRef.current}
        handleClose={handleMenuClose}
      />
    </>
  );
};
export default Header;
