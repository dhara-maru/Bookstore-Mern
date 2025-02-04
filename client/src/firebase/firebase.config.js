
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCyoGvPkssmBM8_zGqfZsIrjPawWPWGIYc",
  authDomain: "comiccon-mern.firebaseapp.com",
  projectId: "comiccon-mern",
  storageBucket: "comiccon-mern.firebasestorage.app",
  messagingSenderId: "877169120150",
  appId: "1:877169120150:web:62bb62ec67d40ab05fc3b7",
  measurementId: "G-VLN8TKCWW1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;