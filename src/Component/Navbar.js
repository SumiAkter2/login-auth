import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
const Navbar = () => {
  const navigate = useNavigate();
  const signOutPlease = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <nav>
        <Link to="/login" style={{ marginRight: "50px" }}>
          Log In
        </Link>
        <Link to="/signup" style={{ marginRight: "50px" }}>
          Sign Up
        </Link>
        <Link onClick={signOutPlease}>Sign OUt</Link>
      </nav>
    </div>
  );
};

export default Navbar;
