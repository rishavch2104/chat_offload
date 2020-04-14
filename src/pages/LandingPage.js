import React from "react";
import { Typography, Box, Button, Grid } from "@material-ui/core";
import makeStyles from "@material-ui/styles/makeStyles";
import Navbar from "../components/Navbar";
import backgroundCover from "./../../public/img/backgroundCover.svg";
import { signInWithGoogle } from "../config/firebaseConfig/auth";
const useStyles = makeStyles({
  image: {
    width: "90%",
    maxWidth: "1000px",
    height: "auto",
    marginTop: "3rem"
  },
  griditem: {
    display: "flex",
    justifyContent: "center"
  },
  heading: {
    marginBottom: "3rem"
  }
});
const HomePage = () => {
  const classes = useStyles();
  const signIn = () => {
    signInWithGoogle();
  };
  return (
    <Box
      height="100vh"
      style={{
        backgroundImage:
          "linear-gradient(45deg,rgba(255,255,255,1),rgba(255,255,255,1),rgba(255,255,255,1) , rgba(154,247,185,.7))"
      }}
    >
      <Navbar />
      <Grid style={{ marginTop: "7rem" }} container>
        <Grid item lg={6} sm={12}>
          <Box
            height="100%"
            mt="20px"
            ml="20px"
            mr="20px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Typography align="center" variant="h1">
              This is a safe space!
            </Typography>
            <Typography variant="subtitle1">
              Share what you're going through, or help someone vent. The choice
              is yours!
            </Typography>
            <Button onClick={signIn}>Sign in</Button>
          </Box>
        </Grid>
        <Grid className={classes.griditem} item lg={6} sm={12}>
          <img className={classes.image} src={backgroundCover}></img>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
