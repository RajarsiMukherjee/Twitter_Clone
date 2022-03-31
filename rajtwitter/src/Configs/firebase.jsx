// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYXqvDnEdfp9dcqCb70cToekInaeo5aOA",
  authDomain: "twitter-clone-ba49b.firebaseapp.com",
  projectId: "twitter-clone-ba49b",
  storageBucket: "twitter-clone-ba49b.appspot.com",
  databaseURL: "https://twitter-clone-ba49b-default-rtdb.firebaseio.com",
  messagingSenderId: "1041126736507",
  appId: "1:1041126736507:web:e8251e40e1eb00a36b98de",
  measurementId: "G-MEFDQRTKFF"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = firebaseApp.firestore();

export default db;