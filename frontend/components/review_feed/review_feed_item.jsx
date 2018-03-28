import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import TimeAgo from 'react-timeago';

const ReviewFeedItem = ({ review, user, cheese }) => {
  let thisReview;
  if (review.review === "") {
    thisReview = "";
  } else {
    thisReview = <div className="line2-review-rf">
      {review.review}
    </div>;
  }
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
          <div className="review-rf">{thisReview}</div>

        </div>
        <div id="timestamp"><i><TimeAgo date={review.created_at} /></i></div>

      </div>

      <hr />

    </div>

  );
};

export default ReviewFeedItem;
