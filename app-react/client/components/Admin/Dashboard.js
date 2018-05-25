import React, { Component } from 'react';
import EmployeesContainer from '../../containers/Admin/EmployeesContainer';
import ReviewsContainer from '../../containers/Admin/ReviewsContainer';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Admin</h1>
        <div className="left">
          <EmployeesContainer />
        </div>
        <div className="right">
          <ReviewsContainer />
        </div>
      </div>
    );
  }
}

export default Dashboard;
