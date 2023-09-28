import React, { useState } from "react";
import SignUp from "../components/SignUp/SignUp";
import LogIn from "../components/LogIn/LogIn";

import "./Home.css";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleIGACClick = () => {
    setShowLogin(!showLogin);
  };

  return (
      <div className="container">
        <h1 className="title">START CHATTING <br /> WITH YOUR FRIENDS</h1>
        {showLogin ? <LogIn /> : <SignUp />}
        <span className="IGAC" onClick={handleIGACClick}>
          {showLogin ? "CREATE AN ACCOUNT" : "I GOT AN ACCOUNT"}
        </span>
        <h2 className="CXP">Chat XP</h2>
      </div>
  );
};

export default Home;
