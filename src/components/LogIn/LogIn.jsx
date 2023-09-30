import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"

import "./LogIn.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validations
    if (email === "" || password === "") {
      setEmailError("Email cannot be empty.");
      setPasswordError("Password cannot be empty.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3001/users?email=${email}&password=${password}`
      );
      const data = await response.json();

      if (response.ok && data.length > 0) {
        navigate("/dashboard")
      } else {
        setEmailError("Invalid email or password.");
        setPasswordError("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error en la solicitud GET:", error);
    }
  };

  return (
    <form action="" className="Signup" onSubmit={handleSubmit}>
      <div className="input__container">
        <input
          type="text"
          placeholder="Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="icon__container">
          <img src="../img/email.png" alt="Icon" className="icon" />
        </span>
      </div>
      <span className="error">{emailError}</span>

      <div className="input__container">
        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="icon__container">
          <img src="../img/password.png" alt="Icon" className="icon" />
        </span>
      </div>
      <span className="error">{passwordError}</span>

      <button className="btn__signup" type="submit">
        Log In
      </button>
    </form>
  );
};

export default LogIn;
