import { connect } from 'react-redux';
import Employees from '../../components/Admin/Employees';
import {
  getAdminEmployees
} from '../../actions/employees';


function mapStateToProps(state) {
  return {
    employees: state.employees.employees
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAdminEmployees: () => dispatch(getAdminEmployees())
  };
}

const EmployeesContainer = connect(mapStateToProps, mapDispatchToProps)(Employees);

export default EmployeesContainer;
