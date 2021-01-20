import firebase from "firebase/app";

import "firebase/firestore";
import "firebase";

const config = {
  apiKey: "AIzaSyBkFKHy8_WwiIz1NrCcxSCXW4kylnX9MyA",
  authDomain: "roti-db.firebaseapp.com",
  projectId: "roti-db",
  storageBucket: "roti-db.appspot.com",
  messagingSenderId: "82070421441",
  appId: "1:82070421441:web:a5af5380396f7d7a19f940",
  measurementId: "G-D485ELT70N",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Give access to a GoogleAuthProvider class
const provider = new firebase.auth.GoogleAuthProvider();
// Provider takes some custom args, prompt will trigger google pop-up whenever
// using this authentication
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
