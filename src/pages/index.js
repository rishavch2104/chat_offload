import React from "react";
import LandingPage from "./LandingPage";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core";
import { muiThemeLight } from "./../config/theme";
const Index = () => {
  return (
    <MuiThemeProvider theme={muiThemeLight}>
      <CssBaseline />
      <LandingPage />
    </MuiThemeProvider>
  );
};

export default Index;
