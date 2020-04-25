import React from "react";
import App from "next/app";
import Head from "next/head";
import "react-phone-input-2/lib/high-res.css";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { muiThemeLight } from "./../config/theme";
import { initFirebase } from "./../config/firebaseConfig/firebaseConnect";
import { AuthProvider } from "./../config/authConfig";
import BackgroundImageHoc from "./../config/backgroundImageHoc";
class MyApp extends App {
  constructor() {
    super();
  }

  componentDidMount() {
    initFirebase();

    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>App Title</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>
        <MuiThemeProvider theme={muiThemeLight}>
          <AuthProvider>
            <CssBaseline />
            <BackgroundImageHoc>
              <Component {...pageProps} />
            </BackgroundImageHoc>
          </AuthProvider>
        </MuiThemeProvider>
      </>
    );
  }
}

export default MyApp;
