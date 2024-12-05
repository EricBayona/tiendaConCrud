// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMZNkQTyPfnCAGVLNcAZK_7d_sT9M5wI8",
  authDomain: "bayona-bike-store.firebaseapp.com",
  projectId: "bayona-bike-store",
  storageBucket: "bayona-bike-store.firebasestorage.app",
  messagingSenderId: "213639808830",
  appId: "1:213639808830:web:30d768e3cd25db0d5dce6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);