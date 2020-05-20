import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import TimeAgo from 'react-timeago';
import StarRatingItem from '../shared/star_rating_item';

const ReviewFeedItem = ({ review, user, cheese }) => {
  let thisReview;
  if (review.review === "") {
    thisReview = "";
  } else {
    thisReview = <div className="line2-review-rf">
      {review.review}
    </div>;
  }
  if (!user || !cheese) return null;

  return (
    <div className="review-item-rf">
      <div className="line1-review-rf">
        <div className="text">
          {user.username} was eating
          <Link to={`/cheeseboard/${review.cheese_id}`} > <m>{cheese.name}</m> </Link>
          by {cheese.brand}
        </div>
        <div className="inner">
          <div className="rating">
            <StarRatingItem rating={review.rating} fractions={10} />
          </div>
          <div className="review-rf">{thisReview}</div>
        </div>
        <div id="timestamp"><i><TimeAgo date={review.created_at} /></i></div>
      </div>
      <hr />
    </div>

  );
};

export default ReviewFeedItem;
