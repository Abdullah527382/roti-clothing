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

// Because we are creating an API request, this will be an async event
// We need to pass userAuth (object we get back from auth lib) into the async func
// We also want some additional data (e.g. sign up)
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // Make sure we get an object back with userAuth
  // if userAuth object doesnt exist
  if (!userAuth) return;
  // Now query inside the firestore for our object to see if it exists
  // Get the user reference at that location
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // Use the snapshot below to see if there is data there
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    // If it doesnt exist, create the data
    const { displayName, email } = userAuth;
    // Note down current date at current time
    const createdAt = new Date();

    // Since we are using an async event to store the data. use try/catch block
    try {
      // .set() is the create method here use to create the user
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  // We want to use the userRef object to do other things later on
  return userRef;
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
