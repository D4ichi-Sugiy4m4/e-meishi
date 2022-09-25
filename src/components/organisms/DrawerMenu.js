import React from "react"
import { Drawer, Box, List, ListItem, Typography, Divider, Button, IconButton } from "@material-ui/core"
import { Link } from "react-router-dom"
import { ArrowBackIos } from "@material-ui/icons"

const listItems = [
  {
    name: "あなたの情報",
    to: "/account",
  },
  {
    name: "外部者の情報",
    to: "/others",
  },
]

const DrawerMenu = ({
  open = {},
  onClose = () => {},
}) => {
  return (
    <>
      <Drawer
        open={open}
        onClose={onClose}
        variant="temporary"
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
        }}
      >
        <Box sx={{display: 'flex', justifyContent: 'flex-end', height: 50, color: 'primary'}}>
          <IconButton
            onClick={onClose}>
            <ArrowBackIos />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {listItems.map((item) => (
            <ListItem style={{padding: 0}}>
              <Button
                variant="text"
                component={Link}
                to={item.to}
                fullWidth
              >
                <Box px={3} py={2}>
                  <Typography variant="body1">
                    {item.name}
                  </Typography>
                </Box>
              </Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}

export default DrawerMenu