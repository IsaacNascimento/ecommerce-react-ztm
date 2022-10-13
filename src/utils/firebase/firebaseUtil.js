import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADWmqLKxbipRzsNQACIHn9dCdwawI0ThE",
  authDomain: "crwn-clothing-db-6e5a2.firebaseapp.com",
  projectId: "crwn-clothing-db-6e5a2",
  storageBucket: "crwn-clothing-db-6e5a2.appspot.com",
  messagingSenderId: "661744711956",
  appId: "1:661744711956:web:d3d33a3e7d174b13e3aa01",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (e) {
      console.log("Error creating the user ", e);
    }
  }

  return userDocRef;
};
