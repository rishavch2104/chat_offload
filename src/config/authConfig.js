import React, { useState, createContext } from "react";
import Router from "next/router";
import firebase from "./firebaseConfig/firebaseConnect";

export const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const res = await firebase.auth().signInWithPopup(provider);
  console.log({ res });
  if (res.additionalUserInfo.isNewUser) {
    Router.push("/register", "/register");
  } else {
    Router.push("/homepage", "/homepage");
  }
};

export const AuthContext = createContext([{}, () => {}]);

export function AuthProvider(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const handleLoginChange = toggle => {
    setLoggedIn(() => toggle);
    setIsAuthenticating(() => false);
  };

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log({ user });
        setLoggedIn(true);
      } else {
        console.log("no user");
        handleLoginChange(false);
        Router.push("/index", "/index");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={(isLoggedIn, handleLoginChange, isAuthenticating)}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
