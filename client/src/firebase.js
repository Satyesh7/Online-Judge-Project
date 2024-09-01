// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "online-judge-mern-f09fb.firebaseapp.com",
  projectId: "online-judge-mern-f09fb",
  storageBucket: "online-judge-mern-f09fb.appspot.com",
  messagingSenderId: "436093597593",
  appId: "1:436093597593:web:d2bca4f35b151762660508",
  measurementId: "G-TQ3ZCRK1XL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
