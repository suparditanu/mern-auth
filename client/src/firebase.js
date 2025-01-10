// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-2daa3.firebaseapp.com",
  projectId: "mern-auth-2daa3",
  storageBucket: "mern-auth-2daa3.firebasestorage.app",
  messagingSenderId: "320741293115",
  appId: "1:320741293115:web:f43aecea461126fc3eb01e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);