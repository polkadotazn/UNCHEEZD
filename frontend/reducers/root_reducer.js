import { combineReducers } from 'redux';

import session from './session_reducer';
import cheese from './cheese_reducer';
import reviews from './review_reducer';
import sessionErrors from './session_errors_reducer';

const rootReducer = combineReducers({
  session,
  cheese,
  reviews,
  sessionErrors
});

export default rootReducer;
