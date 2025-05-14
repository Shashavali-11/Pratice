// pages/Cart.js
import React from 'react';
import { useCart } from '../hooks/useCart';
import CartItem from '../comps/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <h3 className="mt-4">Total: ${total.toFixed(2)}</h3>
      <Link to="/checkout" className="inline-block mt-2 bg-green-500 text-white px-4 py-2 rounded">
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default Cart;
