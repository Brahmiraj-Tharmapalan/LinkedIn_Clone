import dotenv from "dotenv";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

dotenv.config(); // Load environment variables from .env file

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "linkedin-clone-67adf.firebaseapp.com",
  projectId: "linkedin-clone-67adf",
  storageBucket: "linkedin-clone-67adf.appspot.com",
  messagingSenderId: "941143574398",
  appId: "1:941143574398:web:6f54e3fb05d6834853152f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebase;
