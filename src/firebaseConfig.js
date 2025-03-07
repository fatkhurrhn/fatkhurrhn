import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARlOsoBgLfnP_bmArNe9PPyfORQFiZWkI",
  authDomain: "login-tes-bbb5f.firebaseapp.com",
  projectId: "login-tes-bbb5f",
  storageBucket: "login-tes-bbb5f.appspot.com",
  messagingSenderId: "759168771284",
  appId: "1:759168771284:web:cd4139bf9e8c49caf18741",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
