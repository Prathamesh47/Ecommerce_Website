
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR0zVOgRGl-f_2Z8tMRGCfi1FzPgz9xAY",
  authDomain: "ecomm-d7731.firebaseapp.com",
  projectId: "ecomm-d7731",
  storageBucket: "ecomm-d7731.appspot.com",
  messagingSenderId: "126470759898",
  appId: "1:126470759898:web:94c15c190e4f0b7ac80ce3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }