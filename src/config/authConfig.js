import React, { useState, createContext } from "react";
import Router from "next/router";
import firebase from "./firebaseConfig/firebaseConnect";

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      return result;
    })
    .catch(e => console.log(e.message));
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
        Router.push("/homepage", "/homepage");
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
