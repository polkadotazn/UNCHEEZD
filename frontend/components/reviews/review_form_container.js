import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { requestReview, createReview,
  updateReview, deleteReview } from '../../actions/review_actions';
import { fetchACheese } from '../../actions/cheese_actions';

const mapStateToProps = (state, ownProps) => {
  let cheeseReview = { rating: 0, review: "" };
  if (ownProps.starReview) {
    cheeseReview = ownProps.starReview;
  }
  return {
    cheeseReview: cheeseReview,
    currentUser: state.session.currentUser,
    cheeseId: parseInt(ownProps.match.params.cheeseId),
    userId: state.session.currentUser.id,
    errors: state.reviewErrors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createReview: cheeseReview => dispatch(createReview(cheeseReview))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm));
