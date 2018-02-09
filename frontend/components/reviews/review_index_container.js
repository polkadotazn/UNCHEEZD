import { connect } from 'react-redux';

import ReviewIndex from './review_index';
import { requestAllReviews } from '../../actions/review_actions';

const mapStateToProps = state => {
  console.log(state);
  return {reviews: Object.keys(state.review).map(id => state.review[id])};
};

const mapDispatchToProps = dispatch => ({
  requestAllReviews: () => dispatch(requestAllReviews()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
