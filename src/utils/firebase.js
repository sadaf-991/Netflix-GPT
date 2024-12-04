// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfngdLP68lYs9WUOcV8OkLgbGxdm9wDOo",
  authDomain: "netflixgpt-80c24.firebaseapp.com",
  projectId: "netflixgpt-80c24",
  storageBucket: "netflixgpt-80c24.firebasestorage.app",
  messagingSenderId: "668856302317",
  appId: "1:668856302317:web:d3521434ee1f039c312ae4",
  measurementId: "G-MPL0QN1N5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();