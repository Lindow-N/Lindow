// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmHSoqAkxjRF8BIL20HZptATlXTbX0Bxk",
  authDomain:
    "[lindow-9805a.firebaseapp.com](http://lindow-9805a.firebaseapp.com/)",
  projectId: "lindow-9805a",
  storageBucket: "[lindow-9805a.appspot.com](http://lindow-9805a.appspot.com/)",
  messagingSenderId: "119518289749",
  appId: "1:119518289749:web:300d0222473f05c6b1d9dc",
  measurementId: "G-546JG4RG4Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
