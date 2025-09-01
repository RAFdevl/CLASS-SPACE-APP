// src/firebase.js

// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqzHaw6JbvhBN1B1OSXVrcmtw-hnegpJA",
  authDomain: "class-space-app.firebaseapp.com",
  projectId: "class-space-app",
  storageBucket: "class-space-app.firebasestorage.app",
  messagingSenderId: "627587922541",
  appId: "1:627587922541:web:4604221621ac5dbb9d1d64",
  measurementId: "G-2FDMBVTSE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exports untuk digunakan di seluruh proyek
export const auth = getAuth(app);        // Authentication
export const db = getFirestore(app);     // Firestore database
export const storage = getStorage(app);  // Firebase Storage
export const analytics = getAnalytics(app); // Analytics
