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
import { Cancel, Check, Menu } from "@material-ui/icons";
import DrawerMenu from "./DrawerMenu";
import InfoModal from "components/molecules/InfoModal";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "50px",
  },
}));

const modalActions = [
  {
    title: "更新",
    icon: <Check />,
    variant: "contained",
    color: "primary",
    onClick: () => {},
  },
  {
    title: "キャンセル",
    icon: <Cancel />,
    variant: "contained",
    color: "secondary",
    onClick: () => {},
  },
];

const userData = {
  userId: "yUGP79BPN7",
  img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  companyName: "株式会社Breakfast",
  sectionPosition: "営業部 副部長",
  nameLast: "Hoge",
  nameFirst: "Huga",
  mail: "hoge@huga.com",
  companyTel: "090-0000-0000",
  width: "40%",
};

const labels = ["会社名", "部署", "役職", "名前", "電話番号", "メールアドレス"];

const Header = () => {
  const classes = useStyles();
  const [MenuOpen, setMenuOpen] = useState(false);
  const anchorRef = useRef(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [items, setItems] = useState({
    company: "",
    department: "",
    rank: "",
    name: "",
    phone: "",
    email: "",
  });

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
      onClick: () => {
        setMenuOpen(false);
        setIsOpenModal(true);
      },
    },
    {
      title: "自分の名刺",
      color: "inherit",
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
        item={userData}
        handleClose={handleMenuClose}
      />
      <InfoModal
        title={"あなたの情報"}
        open={isOpenModal}
        actions={modalActions}
        labels={labels}
        items={items}
        setItems={setItems}
        handleOnClose={() => {
          setIsOpenModal(false);
          setItems({
            company: "",
            department: "",
            rank: "",
            name: "",
            phone: "",
            email: "",
          });
        }}
      />
    </>
  );
};
export default Header;
