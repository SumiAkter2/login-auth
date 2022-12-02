import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAatc62oxe6kP6y-Clwkwgyyr1micL_kDs",
  authDomain: "login-auth-d2996.firebaseapp.com",
  projectId: "login-auth-d2996",
  storageBucket: "login-auth-d2996.appspot.com",
  messagingSenderId: "14147850627",
  appId: "1:14147850627:web:dba562f8c8d5bf64a2a6b6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
