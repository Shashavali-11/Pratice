// pages/Home.js
import React, { useEffect, useState } from 'react';
import ProductCard from '../comps/ProductCards';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">Failed to load products</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;

