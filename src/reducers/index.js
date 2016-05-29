/* ./src/reducers/index.js */

import { combineReducers } from 'redux';
import MyApp from './counter';

const rootReducer = combineReducers({
  counter
});

export default rootReducer;
