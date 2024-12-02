// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "techno-blog-7b8fb.firebaseapp.com",
  projectId: "techno-blog-7b8fb",
  storageBucket: "techno-blog-7b8fb.firebasestorage.app",
  messagingSenderId: "868979756163",
  appId: "1:868979756163:web:4e0d3b774b82d32a545fb6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);