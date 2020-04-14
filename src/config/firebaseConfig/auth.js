import firebase from "./firebaseConnect";
import "firebase/auth";

export const auth = firebase.auth();

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth
    .signInWithPopup(provider)
    .then(result => {
      console.log(result);
    })
    .catch(e => console.log(e.message));
};
