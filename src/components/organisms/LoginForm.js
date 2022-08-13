import { 
  makeStyles, 
  Box, 
  Button, 
  Divider, 
  Paper, 
  TextField, 
  Typography 
} from "@material-ui/core"
import React from "react"

import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "520px",
  },
}));

const LoginForm = () => {
  const classes = useStyles()
  return (
    <>
    <Box mx={"auto"} my={4} className={classes.root}>
      <Paper>
        <Box px={4} py={2}>
          <Box my={2}>
            <Typography>電子名刺システム</Typography>
          </Box>
          <Divider />
          <Box py={2}>
            <Box my={2}>
              <TextField variant="outlined" label={"Eメールアドレス"}/>
            </Box>
            <Box my={2}>
              <TextField variant="outlined" label={"パスワード"}/>
            </Box>
          </Box>
          <Box my={2}>
            <Button 
              color="primary"
              variant="contained"
              component={Link}
              to="/home"
            >ログイン</Button>
          </Box>
        </Box>
      </Paper>
    </Box>
    </>
  )
}

export default LoginForm