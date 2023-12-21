
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {

  apiKey: "AIzaSyAlK00ymdBMQkUzkWi7JDhjJ4ByiWjXFHg",
  authDomain: "new1-35b88.firebaseapp.com",
  projectId: "new1-35b88",
  storageBucket: "new1-35b88.appspot.com",
  messagingSenderId: "129913114842",
  appId: "1:129913114842:web:77734890516fa773b395e3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const storage = getStorage();
export const db =getFirestore();