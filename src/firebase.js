// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkFbLEP6H6ak90BMAr6vWiBtNiD-tcQfo",
  authDomain: "messaging-client-website.firebaseapp.com",
  projectId: "messaging-client-website",
  storageBucket: "messaging-client-website.appspot.com",
  messagingSenderId: "968252696037",
  appId: "1:968252696037:web:085efd2b3f170599d23b0c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const createUser = createUserWithEmailAndPassword();
export const storage = getStorage();
export const db = getFirestore();
