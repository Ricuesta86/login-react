import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 const firebaseConfig = {
    apiKey: "AIzaSyDnCNVgd4DbPQGRGgLkokR75tgjkcgJKR4",
    authDomain: "login-react-a0855.firebaseapp.com",
    projectId: "login-react-a0855",
    storageBucket: "login-react-a0855.appspot.com",
    messagingSenderId: "696848255815",
    appId: "1:696848255815:web:da5555c3332d5fdb9d5a62"
  };
  
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export {
      db,
      googleAuthProvider,
      firebase
  }