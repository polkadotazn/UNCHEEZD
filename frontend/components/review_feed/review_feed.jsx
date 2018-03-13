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
    console.log("hi",this.props);
    return (
      <div>
        {users &&
          <div className="review-fd-idx">
            <div id="rf-header">
              <h1>Recently Reviewed Cheeses</h1>
            </div>
              <div id="rf-all-reviews">
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
          </div>
        }
      </div>
    );
  }
}

export default ReviewFeed;
