import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewFeed from './review_feed';
import { requestAllReviews } from '../../actions/review_actions';
import { requestAllUsers } from '../../actions/user_actions';
import { requestAllCheeses } from '../../actions/cheese_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: state.reviews,
    currentUser: state.currentUser,
    cheese: state.cheese,
    users: state.users,
    ownProps: ownProps
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllReviews: () => dispatch(requestAllReviews()),
    requestAllUsers: () => dispatch(requestAllUsers()),
    requestAllCheeses: () => dispatch(requestAllCheeses())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewFeed));
