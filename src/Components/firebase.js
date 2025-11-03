// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnn24ocXMUhIK0ChhGeGaex8VnC7bslBM",
  authDomain: "auth-3a81e.firebaseapp.com",
  projectId: "auth-3a81e",
  storageBucket: "auth-3a81e.firebasestorage.app",
  messagingSenderId: "123801739481",
  appId: "1:123801739481:web:fbacb73a4d56f819d5dec8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;