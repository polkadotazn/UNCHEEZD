import React from 'react';
import { Link } from 'react-router-dom';
import ReviewFeedItem from './review_feed_item';

class ReviewFeed extends React.Component {
  componentWillMount () {
    this.props.requestAllReviews();
    this.props.requestAllUsers();
    this.props.requestAllCheeses();
  }

  render () {
    const users = this.props.users;
    return (
      <div>
        {users &&
          <div className="review-fd-idx">
            {Object.values(this.props.reviews).map(review => {
                return (
                  <ReviewFeedItem
                    cheese={this.props.cheese[review.cheese_id]}
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
