import React from "react";
import App from "next/app";
import Head from "next/head";

class MyApp extends App {
  constructor() {
    super();
  }

  componentDidMount() {
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
            content="minimum-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
