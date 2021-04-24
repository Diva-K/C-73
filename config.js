import * as firebase from "firebase"
require("@firebase/firestore")
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAbHENoPC3_cuRRjkMEatu76ecmtVO45vk",
    authDomain: "wili-1458f.firebaseapp.com",
    projectId: "wili-1458f",
    storageBucket: "wili-1458f.appspot.com",
    messagingSenderId: "183615757413",
    appId: "1:183615757413:web:5ce80224a4d2d8cff63a8c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()