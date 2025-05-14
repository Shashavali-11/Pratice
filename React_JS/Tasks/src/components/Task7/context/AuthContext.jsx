
// context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('auth'));

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('auth', 'true');
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('auth');
  };

  return <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
