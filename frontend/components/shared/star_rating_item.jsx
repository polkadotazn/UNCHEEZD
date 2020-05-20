import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const StarRatingItem = ({ rating, fractions }) => {
  return (
    <div class="star-rating-item">
      <Rating
        className="star-rating"
        emptySymbol={<img src={window.clearChzImg} className="star" />}
        fullSymbol={<img src={window.filledChzImg} className="star" />}
        initialRating={rating}
        fractions={fractions}
        readonly={true}
      />
    </div>
  )
}

export default StarRatingItem;
