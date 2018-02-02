import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  console.log("CHECK");
  console.log(action);

  switch (action.type) {

    case RECEIVE_SESSION_ERRORS:
    console.log("OK");
    console.log(action.errors);
      return [...action.errors];
    case RECEIVE_CURRENT_USER:
      return null;
    default:
      return state;
  }
};
