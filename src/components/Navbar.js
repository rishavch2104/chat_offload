import React, { useContext } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import MenuIcon from "@material-ui/icons/Menu";
import { muiThemeLight } from "../config/theme";
import { signInWithGoogle, signOutwithGoogle } from "../config/authConfig";
import { AuthContext } from "./../config/authConfig";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(3)
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2)
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const { isLoggedIn } = useContext(AuthContext);
  const signIn = () => {
    signInWithGoogle();
  };
  const signOut = () => {
    signOutwithGoogle();
  };
  return (
    <div className={classes.root}>
      <AppBar
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
        position="static"
        elevation={0}
        color="transparent"
      >
        <Toolbar>
          <Box
            margin="auto"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            width="70%"
          >
            <Typography color="textSecondary" display="inline" variant="h4">
              OffLoad
            </Typography>
            {!isLoggedIn ? (
              <Button onClick={signIn} color="inherit">
                Login
              </Button>
            ) : (
              <Button onClick={signOut} color="inherit">
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
