// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfh4ejuZlCmumfbeoDs8eOZ0RZgjF_83E",
  authDomain: "react-course-4dc00.firebaseapp.com",
  projectId: "react-course-4dc00",
  storageBucket: "react-course-4dc00.appspot.com",
  messagingSenderId: "942703440808",
  appId: "1:942703440808:web:98017d9be1ddbdbe0fa39d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();