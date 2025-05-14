// pages/Login.js
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/checkout');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
