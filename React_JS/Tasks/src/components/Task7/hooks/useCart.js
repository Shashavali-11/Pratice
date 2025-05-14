// hooks/useCart.js
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, increaseQty, decreaseQty } from '../redux/CartSlice';

export const useCart = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const add = item => dispatch(addToCart(item));
  const remove = id => dispatch(removeFromCart(id));
  const increase = id => dispatch(increaseQty(id));
  const decrease = id => dispatch(decreaseQty(id));

  return { cart, add, remove, increase, decrease };
};