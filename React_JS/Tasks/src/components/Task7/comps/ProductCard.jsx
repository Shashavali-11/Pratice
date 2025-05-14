// components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const ProductCard = ({ product }) => {
  const { add } = useCart();

  return (
    <div className="border rounded p-4 shadow">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="h-40 mx-auto" />
        <h2 className="font-bold mt-2">{product.title}</h2>
      </Link>
      <p>${product.price}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded" onClick={() => add(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;