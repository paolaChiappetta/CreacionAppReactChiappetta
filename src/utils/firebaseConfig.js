// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsFKfifxNvp14QV-ZNrFHK-K_zk48mz4Q",
  authDomain: "sigma-hr-3d4bf.firebaseapp.com",
  projectId: "sigma-hr-3d4bf",
  storageBucket: "sigma-hr-3d4bf.appspot.com",
  messagingSenderId: "125148110868",
  appId: "1:125148110868:web:8fda20788c7c5bb6494701"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db