import React, { useState } from 'react';
import ProductCard from './components/ProductCard';

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'Noise-cancelling over-ear headphones',
      image: 'https://via.placeholder.com/150',
      avgRating: 4.0,
      totalRatings: 1,
    },
    {
      id: 2,
      name: 'Smartwatch',
      description: 'Water-resistant with fitness tracking features',
      image: 'https://via.placeholder.com/150',
      avgRating: 3.5,
      totalRatings: 2,
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      description: 'Portable speaker with deep bass',
      image: 'https://via.placeholder.com/150',
      avgRating: 5.0,
      totalRatings: 1,
    },
  ]);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts(prevProducts =>
      prevProducts.map(product => {
        if (product.id === productId) {
          const newTotal = product.totalRatings + 1;
          const newAvg =
            ((product.avgRating * product.totalRatings) + newRating) / newTotal;
          return {
            ...product,
            avgRating: newAvg,
            totalRatings: newTotal,
          };
        }
        return product;
      })
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product Ratings</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onRatingSubmit={handleRatingSubmit}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
