import React from "react";
import App from "next/app";

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
}

export default MyApp;
