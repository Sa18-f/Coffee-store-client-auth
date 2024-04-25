// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJeQg37bD1xxZozKqIEcEqxlunR2kqs4o",
  authDomain: "coffee-store-45b36.firebaseapp.com",
  projectId: "coffee-store-45b36",
  storageBucket: "coffee-store-45b36.appspot.com",
  messagingSenderId: "640182465420",
  appId: "1:640182465420:web:629ee8dd20237a32fc1ca9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;