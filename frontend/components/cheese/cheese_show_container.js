import { connect } from 'react-redux';
import CheeseShow from './cheese_show';
import { requestACheese, deleteCheese, updateCheese }
  from '../../actions/cheese_actions';
import { requestAllReviews } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  return {
      cheese: state.cheese[ownProps.match.params.cheeseId],
      reviews: state.reviews


  };

};

const mapDispatchToProps = dispatch => ({
  requestACheese: id => dispatch(requestACheese(id)),
  deleteCheese: cheeseId => dispatch(deleteCheese(cheeseId)),
  requestAllReviews: () => dispatch(requestAllReviews())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheeseShow);
