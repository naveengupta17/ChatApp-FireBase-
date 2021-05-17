// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCNWcdkpvAW_8idMy60My44EEEHOeCpwyo",
  authDomain: "whats-app-clone-63a2c.firebaseapp.com",
  projectId: "whats-app-clone-63a2c",
  storageBucket: "whats-app-clone-63a2c.appspot.com",
  messagingSenderId: "1091211455540",
  appId: "1:1091211455540:web:153ef63b8349b5f23bae61",
  measurementId: "G-VEC9C5MQKS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth, provider, db}