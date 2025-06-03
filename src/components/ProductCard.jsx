import React from 'react';
import RatingWidget from './RatingWidget';
import PropTypes from 'prop-types';

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '16px',
      width: '250px',
      boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '6px' }} />
      <h2 style={{ margin: '10px 0 5px' }}>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Avg Rating:</strong> {product.avgRating.toFixed(1)} ⭐</p>
      <RatingWidget
        productId={product.id}
        onRatingSubmit={onRatingSubmit}
      />
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default ProductCard;
