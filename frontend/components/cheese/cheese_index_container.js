import { connect } from 'react-redux';

import CheeseIndex from './cheese_index';
import { requestAllCheeses } from '../../actions/cheese_actions';

const mapStateToProps = state => {
  return {cheeses: Object.keys(state.cheese).map(id => state.cheese[id])};
};

const mapDispatchToProps = dispatch => ({
  requestAllCheeses: () => dispatch(requestAllCheeses()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheeseIndex);
