// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV2hm1Ce6xZd--cT_3BUMktW3cBCIER4U",
  authDomain: "netflix-clone-next-54be9.firebaseapp.com",
  projectId: "netflix-clone-next-54be9",
  storageBucket: "netflix-clone-next-54be9.appspot.com",
  messagingSenderId: "1009975498985",
  appId: "1:1009975498985:web:e9c38d829cba471edaf878",
  measurementId: "G-JZQ6CY1Z1Z"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
