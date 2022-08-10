import React, { useState, useRef } from 'react'
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
    Modal,
 } from '@material-ui/core'
import LongMenu from '../molecules/LongMenu';
import { Menu } from '@material-ui/icons';
import DrawerMenu from './DrawerMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "50px",
  },
}));

const userData = {
  userId: "yUGP79BPN7",
  img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  companyName: '株式会社Breakfast',
  sectionPosition: '営業部 副部長',
  nameLast: 'Hoge',
  nameFirst: 'Huga',
  mail: "hoge@huga.com",
  companyTel: "090-0000-0000",
  width: '40%',
}

const Header = () => {
  const classes = useStyles();
  const [MenuOpen, setMenuOpen] = useState(false)
  const anchorRef = useRef(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleMenuToggle = () => {
    setMenuOpen((prevOpen) => !prevOpen)
  }
  const handleMenuClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }
    setMenuOpen(false)
  }

  const handleDrawerToggle = () => {
    setDrawerOpen((prevOpen) => !prevOpen)
  }

  const actions = [
    {
      title: "自分の情報",
      color: "inherit",
      to: `/employee`,
    },
    {
      title: "自分の名刺",
      color: "inherit",
      to: `/employee/cards`,
    },
    {
      title: "ログアウト",
      color: "error",
      to: `/`,
      onClick: () => {},
    },
  ]

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.root}>
          <IconButton
            color='inherit'
            edge='start'
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
          <Grid container justify='space-between'>
            <Grid item>
              <Typography variant="h6">
                e名刺
              </Typography>
            </Grid>
            <Grid item>
              <Button
                color="inherit"
                variant='text'
                onClick={handleMenuToggle}
                ref={anchorRef}
              >
                <Avatar style={{width: 24, height: 24, marginRight: 16}}>{"山"}</Avatar>
                <Typography>
                  {"user"}さん
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: 240 }, flexShrink: { sm: 0 } 
        }}
      >
        <DrawerMenu
          open={drawerOpen}
          onClose={handleDrawerToggle}
        />
      </Box>
      <LongMenu 
        open={MenuOpen}
        actions={actions}
        anchorEl={anchorRef.current}
        item={userData}
        handleClose={handleMenuClose}
      />
      <Modal>
        
      </Modal>
    </>
  )
}
export default Header