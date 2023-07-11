// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQCmtDnwYmo66hiAOVlPW5aKJM4z9YFuw",
  authDomain: "pic-n-chat.firebaseapp.com",
  projectId: "pic-n-chat",
  storageBucket: "pic-n-chat.appspot.com",
  messagingSenderId: "211769817268",
  appId: "1:211769817268:web:2b582ec6607521971cffe1",
  measurementId: "G-GHKWTXKVG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, firestore, auth, storage };