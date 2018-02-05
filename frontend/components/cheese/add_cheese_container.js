import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddCheese from './add_cheese';
import { requestCheese, createCheese, updateCheese }
  from '../../actions/cheese_actions';

const mapStateToProps = (state, ownProps) => {
  let cheese = { name: "", brand: "", category: "", description: "" };
  let formType = 'new';
  if (ownProps.match.path === "/cheeseboard/:cheeseId/edit") {
    cheese = state.cheeses[ownProps.match.params.cheeseId];
    formType = "edit";
  }
  return { cheese, formType };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.match.path === "/cheeseboard" ?
    createCheese : updateCheese;
  return {
    requestCheese: id => dispatch(requestCheese(id)),
    action: cheese => dispatch(action(cheese))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCheese));
