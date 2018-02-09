import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const ReviewItem = ({ review, user }) => {
  return (
    <div className="review-item">
      <div className="line1-review">
        {user.username} gave a rating of:
        <Rating
          className="star-rating"
          emptySymbol={<img src="http://i68.tinypic.com/21l06bn.png"
            className="star" id="emptyCheese"/>}
          fullSymbol={<img src="http://i68.tinypic.com/15czlvt.png"
            className="star" id="fullCheese"/>}
          initialRating={review.rating}
          fractions={2}
          readonly={true}
        />
      </div>
      <div className="line2-review">
        <blockquote>{review.review}</blockquote>
      </div>
    </div>
  );
};

export default ReviewItem;
