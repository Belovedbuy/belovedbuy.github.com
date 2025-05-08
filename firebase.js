// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3O79FecTCvws3w-fu1_Nrz4vNz45v_tI",
  authDomain: "belovedbuy-31c5d.firebaseapp.com",
  projectId: "belovedbuy-31c5d",
  storageBucket: "belovedbuy-31c5d.firebasestorage.app",
  messagingSenderId: "883090922749",
  appId: "1:883090922749:web:7ea0c73afbcae374217294",
  measurementId: "G-PK17J7WBPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
