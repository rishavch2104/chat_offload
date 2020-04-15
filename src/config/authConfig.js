import React, { useState, createContext } from "react";

import firebase from "./firebaseConfig/firebaseConnect";

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth
    .signInWithPopup(provider)
    .then(result => {
      console.log(result);
    })
    .catch(e => console.log(e.message));
};

export const AuthContext = createContext([{}, () => {}]);

export function AuthProvider(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const handleLoginChange = toggle => {
    setLoggedIn(toggle);
  };
  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log({ user });
        handleLoginChange(true);
      } else {
        console.log("no user");
        handleLoginChange(false);
      }
    });
    return () => {
      unsubscribe();
    };
  });
  return (
    <AuthContext.Provider value={(isLoggedIn, handleLoginChange)}>
      {props.children}
    </AuthContext.Provider>
  );
}
