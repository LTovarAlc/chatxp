import { createContext, useContext, useState } from 'react';

// Context para la autenticación
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

// Context para el usuario
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  const setUser = (name) => {
    setUsername(name);
  };

  return (
    <UserContext.Provider value={{ username, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
