// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmYNMSfx1jlTKzykWFFe0Ib6cWMHWnShY",
  authDomain: "coffee-store-ecc7e.firebaseapp.com",
  projectId: "coffee-store-ecc7e",
  storageBucket: "coffee-store-ecc7e.firebasestorage.app",
  messagingSenderId: "316196830454",
  appId: "1:316196830454:web:37d40eece0006bf367c0d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;