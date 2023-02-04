// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgKIAxSz26lHRSwfiOIS6Z4fQ3w9lhOf0",
  authDomain: "noteballs2-80d3e.firebaseapp.com",
  projectId: "noteballs2-80d3e",
  storageBucket: "noteballs2-80d3e.appspot.com",
  messagingSenderId: "628986228052",
  appId: "1:628986228052:web:8a4fc232aa41d75a69ecc1"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const auth = getAuth(app)

export {
	db, auth
}