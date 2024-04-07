// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "social-media-v2-c1d60.firebaseapp.com",
  projectId: "social-media-v2-c1d60",
  storageBucket: "social-media-v2-c1d60.appspot.com",
  messagingSenderId: "686669305392",
  appId: "1:686669305392:web:ad1438324f1a619138fff5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);