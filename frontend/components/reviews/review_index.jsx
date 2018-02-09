import React from 'react';
import { Link } from 'react-router-dom';
import ReviewItem from './review_item';

class ReviewIndex extends React.Component {
  componentWillMount () {
    this.props.requestAllReviews();
    this.props.requestAllUsers();
  }

  render () {
    const users = this.props.users;
    return (
      <div className="review-idx">
        {Object.values(this.props.reviews).map(review => {
          if (review.cheese_id.toString()
            === this.props.ownProps.match.params.cheeseId) {
            return (
              <ReviewItem
                key={review.id}
                rating={review.rating}
                review={review}
                user={users[review.user_id]}
              />
            );
          }
        })}
      </div>
    );
  }
}

export default ReviewIndex;


// console.log("review prop",this.props);
// if (!this.props.review) {
//   return null;
// }
// return (
//   <div className="review-idx">
//     {this.props.reviews.map(review => {
//       if (review.cheese_id === this.props.ownProps.params.id) {
//       return (<ReviewItem
//         key={review.id}
//         rating={review.rating}
//         review={review}
//          />
//      );
//      }
//
//    })};
//
//   </div>
// );
