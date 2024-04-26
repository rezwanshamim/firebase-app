import React from "react";
import { auth } from "../Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const googleClick = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    // console.log(result);

    navigate("/blogs");
  };

  return (
    <>
      <div className="container google">
        <button
          onClick={googleClick}
          className="button d-flex justify-content-center align-items-center "
        >
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png"
            alt="google login"
            style={{ width: "10%" }}
          />
          <span className="span text-white" style={{ marginLeft: "1rem" }}>
            Login with Google
          </span>
        </button>
      </div>
    </>
  );
};

export default Login;
