// pages/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const ProductDetail = () => {
  const { id } = useParams();
  const { add } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(setProduct)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!product) return <p className="text-center text-red-500">Product not found</p>;

  return (
    <div className="p-4">
      <img src={product.image} alt={product.title} className="h-60 mx-auto" />
      <h2 className="text-xl font-bold mt-2">{product.title}</h2>
      <p>{product.description}</p>
      <p className="mt-2 font-bold">${product.price}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => add(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
