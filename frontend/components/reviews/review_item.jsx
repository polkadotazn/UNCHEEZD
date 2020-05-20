import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import StarRatingItem from '../shared/star_rating_item';

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
          <StarRatingItem rating={review.rating} fractions={2} />
        </div>
      </div>
      {thisReview}
    </div>
  );
};

export default ReviewItem;
