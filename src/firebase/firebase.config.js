// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASRydkgbL2mUip8CMc8pURLZ7NcGdxN3U",
  authDomain: "coffee-store-auth-20e97.firebaseapp.com",
  projectId: "coffee-store-auth-20e97",
  storageBucket: "coffee-store-auth-20e97.firebasestorage.app",
  messagingSenderId: "983307628709",
  appId: "1:983307628709:web:81b57077a6f506bc9e9d4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);