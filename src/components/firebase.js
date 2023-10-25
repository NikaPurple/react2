// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjh8E8753iEJX1N_XO-nwve34OMdXZnLE",
  authDomain: "appreact-744d4.firebaseapp.com",
  projectId: "appreact-744d4",
  storageBucket: "appreact-744d4.appspot.com",
  messagingSenderId: "860830439934",
  appId: "1:860830439934:web:ecbd05e4d6ad16fa2cc8af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const  storage = getStorage(app);