// import { configureStore } from '@reduxjs/toolkit';
// import { cartReducer } from  './CartSlice';

// export const Store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });


// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
