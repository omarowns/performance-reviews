// let's go!
import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

//Import components
import AppContainer from './containers/AppContainer';
import EmployeesListContainer from './containers/EmployeesListContainer';
import EmployeeContainer from './containers/EmployeeContainer';
import AdminDashboardContainer from './containers/Admin/DashboardContainer';
import AdminEmployeeContainer from './containers/Admin/EmployeeContainer';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer}>
        <Route path="/employees" component={EmployeesListContainer}></Route>
        <Route path="/employees/:employee_id" component={EmployeeContainer}></Route>
        <Route path="/admin" component={AdminDashboardContainer}></Route>
        <Route path="/admin/employees/:employee_id" component={AdminEmployeeContainer}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
