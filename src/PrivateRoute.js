// PrivateRoute.js
import React from 'react';
import { useAuth } from './AuthContext';
import { Navigate, Route } from 'react-router-dom';

export const PrivateRoute = ({ ...props }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Route {...props} />;
  } else {
    return <Navigate to="/" state={{ from: props.path }} />;
  }
};
