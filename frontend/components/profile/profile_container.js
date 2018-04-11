import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserProfile from './user_profile';
import { requestAllReviews, requestReview, updateReview,
  deleteReview } from '../../actions/review_actions';
import { requestUser, requestAllUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const reviews = Object.values(state.reviews);
  return {
    currentUser: state.session.currentUser,
    reviews: reviews,
    users: state.users,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllReviews: () => dispatch(requestAllReviews()),
    requestReview: (id) => dispatch(requestReview()),
    updateReview: (review) => dispatch(updateReview(review)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    requestUser: (userId) => dispatch(requestUser(userId)),
    requestAllUsers: () => dispatch(requestAllUsers())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile));
