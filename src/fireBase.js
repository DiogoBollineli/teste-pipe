import firebase from "firebase/app";
import "firebase/auth"
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyACiN5qp1nkmGmqZjEoJ8Dydpr13SEJoT0",
  authDomain: "desenvolvimento-web-puc-pr.firebaseapp.com",
  projectId: "desenvolvimento-web-puc-pr",
  storageBucket: "desenvolvimento-web-puc-pr.appspot.com",
  messagingSenderId: "488234584388",
  appId: "1:488234584388:web:1bd330cea343d14ef12f11",
  measurementId: "G-KB0WYKXCX1"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
export default firebase;