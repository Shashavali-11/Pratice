// components/CartItem.js
import React from 'react';
import { useCart } from '../hooks/useCart';

const CartItem = ({ item }) => {
  const { increase, decrease, remove } = useCart();

  return (
    <div className="flex justify-between items-center border p-2">
      <p>{item.title}</p>
      <div>
        <button onClick={() => decrease(item.id)}>-</button>
        <span className="mx-2">{item.quantity}</span>
        <button onClick={() => increase(item.id)}>+</button>
      </div>
      <button onClick={() => remove(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
