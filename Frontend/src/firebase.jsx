import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAUk65t_4bEGIlkTol3CwjyQAQl7bGDLrU",
  authDomain: "linkedin-clone-67adf.firebaseapp.com",
  projectId: "linkedin-clone-67adf",
  storageBucket: "linkedin-clone-67adf.appspot.com",
  messagingSenderId: "941143574398",
  appId: "1:941143574398:web:6f54e3fb05d6834853152f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();

export {db, auth};
export default firebase;
