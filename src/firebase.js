import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCJPVzjXXiYUO8wvhs4gTw908BZWia6vn4",
  authDomain: "chatting-d0840.firebaseapp.com",
  projectId: "chatting-d0840",
  storageBucket: "chatting-d0840.appspot.com",
  messagingSenderId: "85328452167",
  appId: "1:85328452167:web:eb7c1a6b8538a84e4aaf62"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
