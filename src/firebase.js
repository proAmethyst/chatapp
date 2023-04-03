
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFEmGThzdX2cv3HoPOlJPMC0V9GKD7tio",
  authDomain: "chat-app-44902.firebaseapp.com",
  projectId: "chat-app-44902",
  storageBucket: "chat-app-44902.appspot.com",
  messagingSenderId: "740447430483",
  appId: "1:740447430483:web:aebd596d4abd8cc1fba3a6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();