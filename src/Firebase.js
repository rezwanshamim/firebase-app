// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPyJImi-9vpKGLIIStFlhnxYIgcDQpCqw",
  authDomain: "react-firebase-dec71.firebaseapp.com",
  projectId: "react-firebase-dec71",
  storageBucket: "react-firebase-dec71.appspot.com",
  messagingSenderId: "182764207140",
  appId: "1:182764207140:web:1c67fd6184bc2bcc23ecb1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
