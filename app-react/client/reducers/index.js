import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import employees from './employees';
import reviews from './reviews';

const rootReducer = combineReducers({
  employees,
  reviews,
  routing: routerReducer
});

export default rootReducer;
