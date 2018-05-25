import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Employees extends Component {
  constructor(props) {
    super(props);
    this.renderEmployees = this.renderEmployees.bind(this);
  }

  componentDidMount() {
    this.props.getAdminEmployees && this.props.getAdminEmployees();
  }

  renderEmployees() {
    const { employees = [] } = this.props;
    if (employees.length < 1) {
      return null;
    }

    return employees.map(employee => {
      return (
        <li>
          <Link to={`/admin/employees/${employee.attributes.id}`}>
            <h5>{ employee.attributes.name }</h5>
            <div>
            </div>
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

Employees.propTypes = {
  employees: PropTypes.array
}

export default Employees;
