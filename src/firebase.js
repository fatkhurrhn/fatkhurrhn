// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_m0DjaSLa5tyrQChI7WNHRLQYd8Ydtjw",
  authDomain: "my-porto-d422c.firebaseapp.com",
  projectId: "my-porto-d422c",
  storageBucket: "my-porto-d422c.appspot.com",
  messagingSenderId: "1075491849941",
  appId: "1:1075491849941:web:b527df694af5f499c0c45c",
  measurementId: "G-KLZ7H8KJYH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, serverTimestamp }; // Export serverTimestamp