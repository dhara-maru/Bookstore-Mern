// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyoGvPkssmBM8_zGqfZsIrjPawWPWGIYc",
  authDomain: "comiccon-mern.firebaseapp.com",
  projectId: "comiccon-mern",
  storageBucket: "comiccon-mern.firebasestorage.app",
  messagingSenderId: "877169120150",
  appId: "1:877169120150:web:62bb62ec67d40ab05fc3b7",
  measurementId: "G-VLN8TKCWW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;