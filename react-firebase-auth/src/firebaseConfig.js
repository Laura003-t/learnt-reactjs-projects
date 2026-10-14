import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCI5RnvwHtQZMGrO5GPA4rmsB6Per5E7a4",
  authDomain: "react-firebase-auth-2024-f06c7.firebaseapp.com",
  projectId: "react-firebase-auth-2024-f06c7",
  storageBucket: "react-firebase-auth-2024-f06c7.firebasestorage.app",
  messagingSenderId: "780165456309",
  appId: "1:780165456309:web:bf8302484f7875b4c3f9fc",
  measurementId: "G-WTY2019X5M"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;