// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALPTWC8xX8ghWVNfT_mvMIXcTHcn37eeI",
  authDomain: "wearex-a1a96.firebaseapp.com",
  projectId: "wearex-a1a96",
  storageBucket: "wearex-a1a96.appspot.com",
  messagingSenderId: "307676943929",
  appId: "1:307676943929:web:12849707cdeda4b1f15fe8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {app,auth}