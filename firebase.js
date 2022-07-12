// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNwQgTSVjjrnYax1MxJlJFv7S9jxRns20",
  authDomain: "mygitapp-d6fa7.firebaseapp.com",
  projectId: "mygitapp-d6fa7",
  storageBucket: "mygitapp-d6fa7.appspot.com",
  messagingSenderId: "462091987036",
  appId: "1:462091987036:web:0a3a9d6c1c76bd85e79e99",
  measurementId: "G-72KPX93P1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);