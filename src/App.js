import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard  from "./pages/Dashboard";
import CreatedUser from "./pages/CreatedUser";

import "./reset.css"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/welcome"element={<CreatedUser/>}/>
      </Routes>
    </Router>
  )
}

export default App;
