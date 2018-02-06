import { connect } from 'react-redux';
import CheeseShow from './cheese_show';
import { requestACheese } from '../../actions/cheese_actions';

const mapStateToProps = (state, ownProps) => {
  return {cheese: state.cheese[ownProps.match.params.cheeseId]};
};

const mapDispatchToProps = dispatch => ({
  requestACheese: id => dispatch(requestACheese(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheeseShow);
