import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAH0IJelOD6yoJRjfGDQTx_CnM_ZF1MVU4",
  authDomain: "react-authenti-f77b5.firebaseapp.com",
  projectId: "react-authenti-f77b5",
  storageBucket: "react-authenti-f77b5.appspot.com",
  messagingSenderId: "1050710420542",
  appId: "1:1050710420542:web:b88ba60c6cb213dd41f56f",
  measurementId: "G-56Y9HB6K7L"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;