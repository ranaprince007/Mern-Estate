// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-34a49.firebaseapp.com",
  projectId: "mern-estate-34a49",
  storageBucket: "mern-estate-34a49.firebasestorage.app",
  messagingSenderId: "186704935623",
  appId: "1:186704935623:web:7df801114bc89d237e5ce2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);