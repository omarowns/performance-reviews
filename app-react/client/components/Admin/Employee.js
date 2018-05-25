import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Employee extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: ''
    };
  }

  componentDidMount() {
    const { params: { employee_id = 1 } } = this.props;
    this.props.getAdminEmployee && this.props.getAdminEmployee(employee_id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.employee &&
        nextProps.employee.attributes &&
        nextProps.employee.attributes.name) {
      this.setState({
        name: nextProps.employee.attributes.name
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { employee } = this.props;
    this.props.putAdminEmployee && this.props.putAdminEmployee(employee.attributes.id, this.state);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    const { employee } = this.props;
    if (!employee) {
      return null;
    }

    return (
      <div>
        <h4> Employee { employee.attributes.id } </h4>
          <form onSubmit={ this.handleSubmit }>
            <div className='field'>
              <label>Name:</label>
              <input type='text' value={ this.state.name } onChange={ this.handleChange }/>
            </div>
            <button type="submit">
              Save
            </button>
          </form>
      </div>
    );
  }
}

Employee.propTypes = {
  employees: PropTypes.array
}

export default Employee;
