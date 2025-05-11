import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from './CartSlice';

const Cart = () => {
  const { items, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>🛒 Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {items.map(item => <CartItem key={item.id} item={item} />)}
          <h3>Total Amount: ${totalAmount}</h3>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
