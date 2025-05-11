import React from 'react';
import Cart from './Cart';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice'


function Task_6() {
  const dispatch = useDispatch();

  const sampleProducts = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Headphones', price: 200 }
    // { id: 3, name: 'Headphones2', price: 200 },
    // { id: 4, name: 'Headphones3', price: 200 },

  ];

  return (
    <div>
      <h1>Redux Cart Manager</h1>
      <div>
        {sampleProducts.map(prod => (
          <button
            key={prod.id}
            onClick={() => dispatch(addItem(prod))}
          >
            Add {prod.name}
          </button>
        ))}
        &nbsp;&nbsp;&nbsp; <br />
      </div>
      <Cart />
    </div>
  );
}

export default Task_6;
