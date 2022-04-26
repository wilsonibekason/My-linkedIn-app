// import firebase from "firebase/compat/app";
// import "firebase/firestore";
import { initializeApp } from "firebase/app";

import firebase from "firebase/app";

import { getStorage } from "firebase/storage";

import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCau5PkLcUkxF0MNHPUpkDe73EkWGKhi9Y",
  authDomain: "linkedin-app-d5d09.firebaseapp.com",
  projectId: "linkedin-app-d5d09",
  storageBucket: "linkedin-app-d5d09.appspot.com",
  messagingSenderId: "984646627879",
  appId: "1:984646627879:web:dba24c09b4577546b51402",
  measurementId: "G-FCVFVM8Q94",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);
const analytics = getAnalytics(firebaseApp);

export { auth, provider, storage, firebaseApp };
export default db;
