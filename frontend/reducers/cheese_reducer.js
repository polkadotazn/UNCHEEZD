import merge from 'lodash/merge';

import { RECEIVE_ALL_CHEESES,
  RECEIVE_A_CHEESE,
  REMOVE_CHEESE } from '../actions/cheese_actions.js';

const cheeseReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_CHEESES:
      return merge({}, state, action.cheeses);
    case RECEIVE_A_CHEESE:
      console.log(action.cheese);
      return merge({}, state, {[action.cheese.id]: action.cheese});
    case REMOVE_CHEESE:
      let newState = merge({}, state);
      delete newState[action.cheeseId];
      return newState;
    default:
      return state;
  }
};

export default cheeseReducer;
