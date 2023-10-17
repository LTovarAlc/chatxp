import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Asegúrate de importar tu contexto de autenticación

const PrivateRoute = ({ element, ...props }) => {
  const { isAuthenticated } = useAuth(); // Aquí obtienes el estado de autenticación

  if (isAuthenticated) {
    return <Route {...props} element={element} />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default PrivateRoute;
