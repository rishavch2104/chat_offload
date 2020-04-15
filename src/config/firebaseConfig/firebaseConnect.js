import firebase from "firebase/app";
import "firebase/auth";

import React, { useEffect } from "react";
const firebaseConfig = {
  apiKey: "AIzaSyA4geHZgdEqJLtA3RSypxaR09RyR3_xk1o",
  authDomain: "chat-offload.firebaseapp.com",
  databaseURL: "https://chat-offload.firebaseio.com",
  projectId: "chat-offload",
  storageBucket: "chat-offload.appspot.com",
  messagingSenderId: "160463830070",
  appId: "1:160463830070:web:40ccfaccb9bfdadb576c97"
};

export const initFirebase = () => {
  console.log("initializing firebase");
  // Initialize Firebase
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

export default firebase;
