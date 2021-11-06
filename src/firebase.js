import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_VNHFSASVV5neMiuAsR4iX9tDdOeGIpc",
  authDomain: "slack-clone-d65d3.firebaseapp.com",
  projectId: "slack-clone-d65d3",
  storageBucket: "slack-clone-d65d3.appspot.com",
  messagingSenderId: "180359449207",
  appId: "1:180359449207:web:f85a30de1b9cdcd0865472"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {db, auth, provider };