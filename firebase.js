// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASTtanw-hFw4Dp7zdSVjxzDELSScdfI2g",
  authDomain: "insta-clone-ht.firebaseapp.com",
  projectId: "insta-clone-ht",
  storageBucket: "insta-clone-ht.appspot.com",
  messagingSenderId: "1076253170568",
  appId: "1:1076253170568:web:41867c33782390a58bf83d",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
