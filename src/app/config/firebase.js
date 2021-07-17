import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "event-fire-5cbaf.firebaseapp.com",
  projectId: "event-fire-5cbaf",
  storageBucket: "event-fire-5cbaf.appspot.com",
  messagingSenderId: "346136572561",
  appId: "1:346136572561:web:8cbb876294bda3615d8530",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
