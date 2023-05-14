// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey:process.env.REACT_FIREBASE_API_KEY,
//   authDomain:process.env.REACT_FIREBASE_AUTH_DOMAIN,
//   projectId:process.env.REACT_FIREBASE_PROJECT_ID,
//   storageBucket:process.env.REACT_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId:process.env.REACT_FIREBASE_MEASSAGING_SENDER_ID,
//   appId:process.env.REACT_FIREBASE_APP_ID,
//   measurementId:process.env.REACT_FIREBASE_MEASUREMENT_ID
// };


const firebaseConfig = {
  apiKey:"AIzaSyDncwJ0SW1nJDg8CAJOkNkv5J_u8dG5O3M",
  authDomain:"netflix-react-firebase-4c68c.firebaseapp.com",
  projectId:"netflix-react-firebase-4c68c",
  storageBucket:"netflix-react-firebase-4c68c.appspot.com",
  messagingSenderId:"732454374892",
  appId:"1:732454374892:web:850ca5c392ba5a15b804c9",
  measurementId:"G-DP7C7BNKP1",
};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)