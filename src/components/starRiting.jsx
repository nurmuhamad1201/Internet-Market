import React, { useState } from 'react';
import ReactStars from 'react-stars';

const StarRating = ({ count, initialRating, onChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    if (onChange) {
      onChange(newRating);
    }
  };

  return (
    <ReactStars
      count={count}  // Number of stars to render
      value={rating}  // Current rating value
      size={24}  // Size of the stars
      color1={'#f0f0f0'}  // Inactive star color
      color2={'#DB4444'}  // Active star color
      edit={true}  // Enable editing (allows user interaction)
      onChange={handleRatingChange}  // Handle rating change events
    />
  );
}

export default StarRating;
