import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../firebase.init";
const provider = new GoogleAuthProvider();

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const nameLogIn = (e) => {
    const name = e.target.value;
    setEmail(name);
    console.log(name);
  };
  const emailLogIn = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const passwordLogIn = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleSubmit = (e) => {
    createUserWithEmailAndPassword(auth, email, password, name)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
      e.preventDefault();
  };
  const googleLogIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <input type="text" placeholder="Name" onBlur={nameLogIn} required />
        <br />
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
            <Link to="/login"> Please Log In</Link>
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

export default SignUp;
