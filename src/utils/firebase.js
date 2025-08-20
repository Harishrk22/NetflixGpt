// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWdrE41Tq2rThc4yMEGvTDO6uQRJLjEP0",
  authDomain: "netflixgpt-1fd7d.firebaseapp.com",
  projectId: "netflixgpt-1fd7d",
  storageBucket: "netflixgpt-1fd7d.firebasestorage.app",
  messagingSenderId: "684619759321",
  appId: "1:684619759321:web:97cea6d40f6ca755d848c8",
  measurementId: "G-N76WXMHXK4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth();
