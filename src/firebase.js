// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQEQpyXPoEg1In6huW1YGo4aYO4k54tlM",
  authDomain: "portfolio-dab99.firebaseapp.com",
  projectId: "portfolio-dab99",
  storageBucket: "portfolio-dab99.appspot.com",
  messagingSenderId: "581383856350",
  appId: "1:581383856350:web:8d9a5f5bd89b1cc42c224f",
  measurementId: "G-Q17EWC25JR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);