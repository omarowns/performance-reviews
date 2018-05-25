import { connect } from 'react-redux';
import Employee from '../../components/Admin/Employee';
import {
  getAdminEmployee,
  putAdminEmployee
} from '../../actions/employees';


function mapStateToProps(state) {
  return {
    employee: state.employees.employee
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAdminEmployee: (employeeId) => dispatch(getAdminEmployee(employeeId)),
    putAdminEmployee: (employeeId, data) => dispatch(putAdminEmployee(employeeId, data))
  };
}

const EmployeeContainer = connect(mapStateToProps, mapDispatchToProps)(Employee);

export default EmployeeContainer;
