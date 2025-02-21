// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtjZ-PE69fX8JRGfHP69zCk15pEoilO9c",
  authDomain: "job-task-666f0.firebaseapp.com",
  projectId: "job-task-666f0",
  storageBucket: "job-task-666f0.firebasestorage.app",
  messagingSenderId: "453084694620",
  appId: "1:453084694620:web:ad6517959363be309d7e99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/nure-alam-riyal/Jab-Task.git
// git push -u origin main