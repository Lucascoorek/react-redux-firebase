import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDKh7whJkaLTq_IQPOV9bI9cuV8ZAe1-3E",
  authDomain: "notes-126a0.firebaseapp.com",
  databaseURL: "https://notes-126a0.firebaseio.com",
  projectId: "notes-126a0",
  storageBucket: "notes-126a0.appspot.com",
  messagingSenderId: "107782539408"
};
firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
