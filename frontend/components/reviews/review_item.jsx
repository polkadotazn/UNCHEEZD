import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const ReviewItem = ({ review, user }) => {
  let thisReview;
  if (review.review === "") {
    thisReview = "";
  } else {
    thisReview = <div className="line2-review">
      <blockquote>
        <i><b className="quote">“ </b>
          {review.review}
        <b className="quote"> ”</b></i>
      </blockquote>
    </div>;
  }

  return (
    <div className="review-item">
      <div className="line1-review">
        <div className="inner">
          <div className="text">{user.username} gave a rating of:</div>
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
      </div>
      {thisReview}
    </div>
  );
};

export default ReviewItem;
