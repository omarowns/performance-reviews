import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

const defaultState = {}
const reactRouterReduxMiddleware = routerMiddleware(browserHistory);
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, reactRouterReduxMiddleware)
  )
);

export const history = syncHistoryWithStore(browserHistory, store)

export default store;
