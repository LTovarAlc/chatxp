import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CreatedUser from "./pages/CreatedUser";
import { UserProvider } from "./AuthContext"; // Cambiado a UserProvider

import "./reset.css";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/welcome" element={<CreatedUser />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
