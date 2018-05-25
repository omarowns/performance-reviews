import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Employee from './Employee';

class EmployeesList extends Component {
  constructor(props) {
    super(props);
    this.renderEmployees = this.renderEmployees.bind(this);
  }

  componentDidMount() {
    this.props.getEmployees && this.props.getEmployees();
  }

  renderEmployees() {
    const { employees } = this.props;
    if (employees.length < 1) {
      return null;
    }

    return employees.map(employee => {
      return (
        <li>
          <Link to={`/employees/${employee.id}`}>
            { employee.name }
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h4> Employees </h4>
        <ul>
          { this.renderEmployees() }
        </ul>
      </div>
    );
  }
}

EmployeesList.propTypes = {
  employees: PropTypes.array
}

export default EmployeesList;
