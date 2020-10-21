import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqxB5JFjZaddjQ8P6QzziAgyLoERYG_24",
    authDomain: "fbrealtime-b36fc.firebaseapp.com",
    databaseURL: "https://fbrealtime-b36fc.firebaseio.com",
    projectId: "fbrealtime-b36fc",
    storageBucket: "fbrealtime-b36fc.appspot.com",
    messagingSenderId: "788303261501",
    appId: "1:788303261501:web:988b111f4e0e31bb581f54",
    measurementId: "G-842V7017TD"
  };


  var fire = firebase.initializeApp(firebaseConfig)

  export default fire
  