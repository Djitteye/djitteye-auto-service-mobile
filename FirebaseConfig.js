// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore'; 
import { getStorage } from 'firebase/storage';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHEUTN_0GzgmBioJjY_6oERZtruUxG5uo",
  authDomain: "djitteye-auto-32f4b.firebaseapp.com",
  projectId: "djitteye-auto-32f4b",
  storageBucket: "djitteye-auto-32f4b.firebasestorage.app",
  messagingSenderId: "724882763414",
  appId: "1:724882763414:web:c3f4df4b4840efb72f1cb7"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistent storage
initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize Firestore
const firestore = getFirestore(app);
//initialize Storage
const storage = getStorage(app);

export { app, firestore, storage }; // Make sure to export firestore
