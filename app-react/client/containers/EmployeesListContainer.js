import { connect } from 'react-redux';
import EmployeesList from '../components/EmployeesList';
import {
  getEmployees
} from '../actions/employees';


function mapStateToProps(state) {
  return {
    employees: state.employees.employees
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEmployees: () => dispatch(getEmployees())
  };
}

const EmployeesListContainer = connect(mapStateToProps, mapDispatchToProps)(EmployeesList);

export default EmployeesListContainer;
