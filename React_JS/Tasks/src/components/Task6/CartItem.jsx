import React from 'react';
import { useDispatch } from 'react-redux';
import {
  removeItem, increaseQuantity, decreaseQuantity
} from './CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '10px' }}>
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <p>
        Quantity: {item.quantity}
        &nbsp;&nbsp;&nbsp;
        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>&nbsp;&nbsp;&nbsp;&nbsp;
      </p>
      <p>Total: ${item.quantity * item.price}</p>
    </div>
  );
};

export default CartItem;
