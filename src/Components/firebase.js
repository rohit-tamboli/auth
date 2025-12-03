// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQmER8e6W_4-I_Z2A-iteQPNRjgW07UtI",
  authDomain: "login-auth-69fd9.firebaseapp.com",
  projectId: "login-auth-69fd9",
  storageBucket: "login-auth-69fd9.firebasestorage.app",
  messagingSenderId: "34313550904",
  appId: "1:34313550904:web:6376c83220aff3b6b73acd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;