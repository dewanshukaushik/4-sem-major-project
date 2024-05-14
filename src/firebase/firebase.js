import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9rKKuVpKvn0VksRtal19gHZRCZaCUjAY",
  authDomain: "blog-12523.firebaseapp.com",
  projectId: "blog-12523",
  storageBucket: "blog-12523.appspot.com",
  messagingSenderId: "239451807252",
  appId: "1:239451807252:web:0491adf0c72c47d2d31101",
  measurementId: "G-DSE4YZBWL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);
export const facebookprovider = new FacebookAuthProvider();