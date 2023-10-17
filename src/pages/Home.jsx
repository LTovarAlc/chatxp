import React, { useState, useEffect } from 'react';
import SignUp from '../components/SignUp/SignUp';
import LogIn from '../components/LogIn/LogIn';
import { useNavigate } from 'react-router-dom';

import './Home.css';

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const handleIGACClick = () => {
    setShowLogin(!showLogin);
  };

  useEffect(() => {
    setShowLogin(false);

    const isTryingToAccessDashboard = window.location.pathname === '/dashboard';

    if (isTryingToAccessDashboard) {
      navigate('/');
      // Muestra una alerta del navegador
      window.alert('You need to log in to start chatting');
    }
  }, [navigate]);

  return (
    <div className="container">
      <h1 className="title">START CHATTING <br /> WITH YOUR FRIENDS</h1>
      {showLogin ? <LogIn /> : <SignUp />}
      <span className="IGAC" onClick={handleIGACClick}>
        {showLogin ? 'CREATE AN ACCOUNT' : 'I GOT AN ACCOUNT'}
      </span>
      <h2 className="CXP">Chat XP</h2>
    </div>
  );
};

export default Home;
