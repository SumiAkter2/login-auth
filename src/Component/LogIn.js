import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../firebase.init";
const provider = new GoogleAuthProvider();

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setSignUp] = useState(true);

  const emailLogIn = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const passwordLogIn = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleSubmit = (e) => {
    if (signUp) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    e.preventDefault();
  };
  const googleLogIn = (e) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>

        <input type="email" placeholder="Email" onBlur={emailLogIn} required />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onBlur={passwordLogIn}
          required
        />
        <br />
        <button type="submit" className="submit">
          Submit
        </button>

        <p>
          New Here ?
          <span>
            <Link to="/signup"> Please Sign Up</Link>
          </span>
        </p>
        <br />
        <button className="submit-google" onClick={googleLogIn}>
          Google Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
