// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOFicwIcT2-mZ9fpS_cZ0-NLtpqkh49xU",
  authDomain: "recipe-b5b44.firebaseapp.com",
  projectId: "recipe-b5b44",
  storageBucket: "recipe-b5b44.appspot.com",
  messagingSenderId: "995211906463",
  appId: "1:995211906463:web:35dad158ab22e49cf901aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);