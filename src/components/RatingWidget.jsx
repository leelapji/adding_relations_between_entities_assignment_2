import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);
      setHoveredRating(0);
    } else {
      alert('Please select a rating between 1 and 5 stars.');
    }
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <div>
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <span
              key={starValue}
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHoveredRating(starValue)}
              onMouseLeave={() => setHoveredRating(0)}
              style={{
                cursor: 'pointer',
                fontSize: '24px',
                color: starValue <= (hoveredRating || rating) ? 'gold' : '#ccc',
              }}
            >
              ★
            </span>
          );
        })}
      </div>
      <button
        onClick={handleSubmit}
        style={{
          marginTop: '8px',
          padding: '5px 10px',
          borderRadius: '4px',
          border: 'none',
          backgroundColor: '#007bff',
          color: '#fff',
          cursor: 'pointer'
        }}
      >
        Submit Rating
      </button>
    </div>
  );
};

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default RatingWidget;
