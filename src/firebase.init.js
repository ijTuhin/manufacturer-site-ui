// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAEf5iCm50oHLPDqE6dEZotPqpEIOtDj0",
  authDomain: "product-manufacturer-site.firebaseapp.com",
  projectId: "product-manufacturer-site",
  storageBucket: "product-manufacturer-site.appspot.com",
  messagingSenderId: "865313555696",
  appId: "1:865313555696:web:4e6327eb5bad1fccb36e35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;