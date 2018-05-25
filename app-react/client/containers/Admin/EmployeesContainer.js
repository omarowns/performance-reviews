import { connect } from 'react-redux';
import Employees from '../../components/Admin/Employees';
import {
  getAdminEmployees,
  deleteAdminEmployee
} from '../../actions/employees';


function mapStateToProps(state) {
  return {
    employees: state.employees.employees
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAdminEmployees: () => dispatch(getAdminEmployees()),
    deleteAdminEmployee: (id) => dispatch(deleteAdminEmployee(id))
  };
}

const EmployeesContainer = connect(mapStateToProps, mapDispatchToProps)(Employees);

export default EmployeesContainer;
