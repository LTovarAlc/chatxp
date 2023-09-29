import React, { useEffect, useState } from "react";

import "./LogIn.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (email === "" || password === "") {
      // Manejar el caso en el que uno o ambos campos estén vacíos
      setEmailError("Email cannot be empty.");
      setPasswordError("Password cannot be empty.");
      return;
    }

    // Realizar una solicitud GET a la API falsa para verificar la autenticación
    try {
      const response = await fetch(
        `http://localhost:3001/users?email=${email}&password=${password}`
      );
      const data = await response.json();

      if (response.ok && data.length > 0) {
        // Éxito: usuario autenticado
        console.log("Usuario autenticado:", data[0]);
        // Aquí puedes realizar acciones adicionales, como redirigir al usuario a una página de inicio de sesión exitosa.
      } else {
        // Error: credenciales incorrectas
        setEmailError("Invalid email or password.");
        setPasswordError("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error en la solicitud GET:", error);
    }
  };

  return (
    <form action="" className="Signup" onSubmit={handleSubmit}>
      {/* Renderizar campos de entrada para el correo y la contraseña */}
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
