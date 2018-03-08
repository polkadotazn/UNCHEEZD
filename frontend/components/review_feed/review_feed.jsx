import React from 'react';
import { Link } from 'react-router-dom';
import ReviewItem from '../reviews/review_item';

class ReviewFeed extends React.Component {
  componentWillMount () {
    this.props.requestAllReviews();
    this.props.requestAllUsers();
  }

  render () {
    const users = this.props.users;
    console.log(this.props.reviews);
    return (
      <div className="review-idx">
        {Object.values(this.props.reviews).map(review => {
            return (
              <ReviewItem
                key={review.id}
                rating={review.rating}
                review={review}
                user={users[review.user_id]}
              />
            );
        })}
      </div>
    );
  }
}

export default ReviewFeed;
