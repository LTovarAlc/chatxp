import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CreatedUser from "./pages/CreatedUser";
import { AuthProvider } from "./AuthContext";
import { PrivateRoute } from "./PrivateRoute";

import "./reset.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path="/welcome" element={<CreatedUser />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
