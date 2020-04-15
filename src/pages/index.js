import React from "react";

import { Typography, Box, Button, Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/Icon";
import SvgIcon from "@material-ui/core/SvgIcon";
import makeStyles from "@material-ui/styles/makeStyles";
import Navbar from "../components/Navbar";
import backgroundCover from "./../../public/img/backgroundCover.svg";
import { signInWithGoogle } from "../config/authConfig";
const useStyles = makeStyles({
  image: {
    width: "90%",
    maxWidth: "1000px",
    height: "auto",
    margin: "auto"
  },
  griditem: {
    display: "flex",
    justifyContent: "center"
  },
  heading: {
    marginBottom: "3rem"
  }
});
const Index = () => {
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
      <Grid style={{ marginTop: "10rem" }} container>
        <Grid item lg={6} sm={12}>
          <Box
            height="100%"
            margin="auto"
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
            <Button
              startIcon={
                <IconButton>
                  <SvgIcon viewBox="0 0 48 48" width="48px" height="48px">
                    <path fill="#FFC107" /> >
                    <path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </SvgIcon>
                </IconButton>
              }
              variant="outlined"
              size="large"
              color="secondary"
              onClick={signIn}
            >
              Get Started
            </Button>
          </Box>
        </Grid>
        <Grid className={classes.griditem} item lg={6} sm={12}>
          <img className={classes.image} src={backgroundCover}></img>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
