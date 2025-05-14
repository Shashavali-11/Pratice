// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { cart } = useCart();
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex justify-between p-4 shadow bg-white dark:bg-gray-800">
      <h1 className="text-xl font-bold">E-Shop</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
      </div>
    </nav>
  );
};

export default Navbar;