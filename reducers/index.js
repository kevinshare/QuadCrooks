import { combineReducers } from 'redux';

import updateCredentials from './login.js';

const rootReducer = combineReducers({
  board: updateState,
});

export default rootReducer;
