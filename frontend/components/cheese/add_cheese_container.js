import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddCheese from './add_cheese';
import { requestACheese, createCheese, updateCheese }
  from '../../actions/cheese_actions';

const mapStateToProps = (state, ownProps) => {
  let cheese = { name: "", brand: "", category: "", description: "" };
  let formType = 'new';
  if (ownProps.match.path === "/cheeseboard/:cheeseId/edit") {
    cheese = state.cheese[ownProps.match.params.cheeseId];
    formType = "edit";
  }
  return { cheese, formType };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  const action = ownProps.match.path === "/cheeseboard/new" ?
    createCheese : updateCheese;
  console.log(action);
  return {
    requestACheese: id => dispatch(requestACheese(id)),
    action: cheese => dispatch(action(cheese))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCheese));
