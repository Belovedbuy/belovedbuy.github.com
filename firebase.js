// Import the Firebase v9+ modular SDK via CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3O79FecTCvws3w-fu1_Nrz4vNz45v_tI",
  authDomain: "belovedbuy-31c5d.firebaseapp.com",
  projectId: "belovedbuy-31c5d",
  storageBucket: "belovedbuy-31c5d.appspot.com",
  messagingSenderId: "883090922749",
  appId: "1:883090922749:web:7ea0c73afbcae374217294",
  measurementId: "G-PK17J7WBPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
