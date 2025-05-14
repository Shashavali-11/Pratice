// pages/Checkout.js
import React, { useReducer, useRef, useEffect } from 'react';

const formReducer = (state, action) => {
  return { ...state, [action.name]: action.value };
};

const Checkout = () => {
  const [formState, dispatch] = useReducer(formReducer, { name: '', address: '' });
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      <input ref={inputRef} name="name" value={formState.name} onChange={e => dispatch(e.target)} placeholder="Name" className="border p-2 w-full mb-2" />
      <input name="address" value={formState.address} onChange={e => dispatch(e.target)} placeholder="Address" className="border p-2 w-full mb-2" />
      <button className="bg-green-500 text-white px-4 py-2 rounded">Place Order</button>
    </div>
  );
};

export default Checkout;