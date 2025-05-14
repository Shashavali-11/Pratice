
// App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './comps/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import { useAuth } from './hooks/useAuth';
import ErrorBoundary from './comps/ErrorBoundary';

const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Checkout = lazy(() => import('./pages/Checkout'));

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
};

const Task_7 = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<p className="text-center mt-10">Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/product/:id"
            element={
              <ErrorBoundary>
                <ProductDetail />
              </ErrorBoundary>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <ErrorBoundary>
                  <Checkout />
                </ErrorBoundary>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Task_7;
