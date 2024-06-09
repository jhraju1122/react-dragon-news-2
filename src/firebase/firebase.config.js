// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjv4hDsHSZuOdPOy01SwC_Sv4yHKrwagk",
  authDomain: "react-dragon-news-auth-3342b.firebaseapp.com",
  projectId: "react-dragon-news-auth-3342b",
  storageBucket: "react-dragon-news-auth-3342b.appspot.com",
  messagingSenderId: "218304798470",
  appId: "1:218304798470:web:8a059da034d8b1603dc887"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;