// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f0015.firebaseapp.com",
  projectId: "mern-blog-f0015",
  storageBucket: "mern-blog-f0015.appspot.com",
  messagingSenderId: "979789371389",
  appId: "1:979789371389:web:284be16bae5eef6e63ab94",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
