// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC4bUNLZm-AnBvysCZtwyzEN4aKHW_yKZA",
    authDomain: "instagram-clone-c907e.firebaseapp.com",
    projectId: "instagram-clone-c907e",
    storageBucket: "instagram-clone-c907e.appspot.com",
    messagingSenderId: "449254399275",
    appId: "1:449254399275:web:cf14ef9fcc1ccb4a23796e",
    measurementId: "G-Q8MGE709SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { app, auth, db, storage}