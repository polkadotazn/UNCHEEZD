import merge from 'lodash/merge';

import { RECEIVE_ALL_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW } from '../actions/review_actions';

const reviewReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_REVIEWS:
      console.log("action", action);
      return merge({}, state, action.reviews);
    case RECEIVE_REVIEW:
      return merge({}, state, {[action.review.id]: action.review});
    case REMOVE_REVIEW:
      let newState = merge({}, state);
      delete newState[action.review.id];
      return newState;
    default:
      return state;
  }
};

export default reviewReducer;
