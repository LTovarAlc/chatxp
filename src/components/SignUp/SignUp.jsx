import React, { useState } from "react";
import "./SignUp.css";
import { v4 as uuidv4 } from "uuid";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //tag generator
  const generateRandomTag = () => {
    const randomTag = Math.floor(Math.random() * 10000);
    return `#${randomTag.toString().padStart(4, "0")}`;
  };

  //valid form
  const validateForm = () => {
    let isValid = true;

    if (username === "") {
      setUsernameError("Enter a username.");
      isValid = false;
    } else if (username.length > 20) {
      setUsernameError("This field cannot exceed 20 characters.");
      isValid = false;
    } else {
      setUsernameError("");
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setEmailError("Enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password === "") {
      setPasswordError("Enter a password.");
      isValid = false;
    } else if (password.length < 6 || password.length > 12) {
      setPasswordError(
        "Password must have 6-12 characters and include a special character."
      );
      isValid = false;
    } else if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>?]/.test(password)) {
      setPasswordError(
        "The password must contain at least one special character."
      );
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  // send forn & generate newUser
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newUser = {
        id: uuidv4(),
        tag: generateRandomTag(),
        username,
        email,
        password,
      };

      try {
        const response = await fetch("http://localhost:3001/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });

        if (response.ok) {
          console.log("Usuario agregado:", newUser);

          setUsername("");
          setEmail("");
          setPassword("");
          setUsernameError("");
          setEmailError("");
          setPasswordError("");
        } else {
          console.error("Error al agregar el usuario.");
        }
      } catch (error) {
        console.error("Error en la solicitud POST:", error);
      }
    }
  };

  return (
    <form action="" className="Signup" onSubmit={handleSubmit}>
      <div className="input__container">
        <input
          type="text"
          placeholder="Username"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <span className="icon__container">
          <img src="../img/user.png" alt="Icon" className="icon" />
        </span>
      </div>
      <span className="error">{usernameError}</span>

      <div className="input__container">
        <input
          type="email"
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
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
