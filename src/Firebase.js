// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-vEO2N58uPtgkhCVHPobX0v692MkOqi0",
  authDomain: "fir-crud-yt-f1c81.firebaseapp.com",
  projectId: "fir-crud-yt-f1c81",
  storageBucket: "fir-crud-yt-f1c81.appspot.com",
  messagingSenderId: "752833445602",
  appId: "1:752833445602:web:62534412b23f29095ee8bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);