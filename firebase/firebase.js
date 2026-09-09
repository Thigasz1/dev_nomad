// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXQAiZTFKNANoS6C0LfSbFz7sXV3TrFhw",
  authDomain: "dev-nomad-thiago.firebaseapp.com",
  projectId: "dev-nomad-thiago",
  storageBucket: "dev-nomad-thiago.firebasestorage.app",
  messagingSenderId: "684278973207",
  appId: "1:684278973207:web:90bfe927a40a3139f52d52",
  measurementId: "G-2KMP97X2R3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);