import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAxsQmxYdGNBPJKcgG6-us_hZSQifZdRzk",
  authDomain: "ovi-teamproject.firebaseapp.com",
  projectId: "ovi-teamproject",
  storageBucket: "ovi-teamproject.appspot.com",
  messagingSenderId: "366956022843",
  appId: "1:366956022843:web:97ae8e38454dad77f8a01e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;