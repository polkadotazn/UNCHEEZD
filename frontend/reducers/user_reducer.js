import merge from 'lodash/merge';

import { RECEIVE_ALL_USERS,
  RECEIVE_USER,
  REMOVE_USER } from '../actions/user_actions';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]: action.user});
    case REMOVE_USER:
      let newState = merge({}, state);
      delete newState[action.cheese.id];
      return newState;
    default:
      return state;
  }
};

export default userReducer;
