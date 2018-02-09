import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewIndex from './review_index';
import { requestAllReviews } from '../../actions/review_actions';
import { requestAllUsers } from '../../actions/user_actions';

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
    requestAllUsers: () => dispatch(requestAllUsers())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex));
