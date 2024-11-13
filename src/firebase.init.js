// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyZubPHNr-f1hMpVy4OCcHeWHu3wZ9F60",
  authDomain: "practice-react-and-firebase.firebaseapp.com",
  projectId: "practice-react-and-firebase",
  storageBucket: "practice-react-and-firebase.firebasestorage.app",
  messagingSenderId: "467988073800",
  appId: "1:467988073800:web:0976d8e93a2740bb06777d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);