// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDN0Tag9VRM8qdmQWuxjY61WiWXib85ls",
  authDomain: "cart-b38c7.firebaseapp.com",
  projectId: "cart-b38c7",
  storageBucket: "cart-b38c7.appspot.com",
  messagingSenderId: "143502470399",
  appId: "1:143502470399:web:77114be555ac10b10db0ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);