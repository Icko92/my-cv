import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAmG6qZ0UPJ5iDRKEtrp_okhQnrIqphYao",
  authDomain: "ivica-denkovski-cv.firebaseapp.com",
  databaseURL: "https://ivica-denkovski-cv.firebaseio.com",
  projectId: "ivica-denkovski-cv",
  storageBucket: "ivica-denkovski-cv.appspot.com",
  messagingSenderId: "587693863922",
  appId: "1:587693863922:web:86ac4bc9e320f873a9316b",
  measurementId: "G-QS447JCL0B",
};

firebase.initializeApp(config);

const firestore = firebase.firestore();

export default firestore;
