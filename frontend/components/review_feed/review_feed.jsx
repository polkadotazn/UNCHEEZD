import React from 'react';
import { Link } from 'react-router-dom';
import ReviewItem from '../reviews/review_item';

class ReviewFeed extends React.Component {
  componentWillMount () {
    this.props.requestAllReviews();
    this.props.requestAllUsers();
    this.props.requestAllCheeses();
  }

  getCheeseName (cheeseId) {
    return this.props.cheese;

  }

  render () {
    console.log("CHEEESE",this.props.cheese);
    const users = this.props.users;
    return (
      <div>
        {users &&
          <div className="review-idx">
            {Object.values(this.props.reviews).map(review => {
                return (
                  <ReviewItem
                    cheese={this.props.cheese[review.cheese_id].name}
                    key={review.id}
                    rating={review.rating}
                    review={review}
                    user={users[review.user_id]}
                  />
                );
            })}
          </div>
        }
      </div>
    );
  }
}

export default ReviewFeed;
