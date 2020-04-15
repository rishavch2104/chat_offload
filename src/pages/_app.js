import React from "react";
import App from "next/app";
import Head from "next/head";

import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { muiThemeLight } from "./../config/theme";
import { initFirebase } from "./../config/firebaseConfig/firebaseConnect";
import { AuthProvider } from "./../config/authConfig";
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
<<<<<<< HEAD

=======
>>>>>>> landing_page
    return (
      <>
        <Head>
          <title>App Title</title>
          <meta
            name="viewport"
<<<<<<< HEAD
            content="minimum-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>
        <Component {...pageProps} />
=======
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>
        <MuiThemeProvider theme={muiThemeLight}>
          <AuthProvider>
            <CssBaseline />
            <Component {...pageProps} />
          </AuthProvider>
        </MuiThemeProvider>
>>>>>>> landing_page
      </>
    );
  }
}

export default MyApp;
