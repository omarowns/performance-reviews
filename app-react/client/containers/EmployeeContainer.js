import { connect } from 'react-redux';
import Employee from '../components/Employee';
import {
  getEmployee
} from '../actions/employees';
import {
  getPendingEmployeeReviews,
  getFeedbacksEmployeeReviews,
  postFinishEmployeeReview
} from '../actions/reviews';


function mapStateToProps(state) {
  return {
    employee: state.employees.employee,
    pendingReviews: state.reviews.pendingReviews,
    feedbackReviews: state.reviews.feedbackReviews
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEmployee: (employeeId) => dispatch(getEmployee(employeeId)),
    getPendingReviews: (employeeId) => dispatch(getPendingEmployeeReviews(employeeId)),
    getFeedbacksReviews: (employeeId) => dispatch(getFeedbacksEmployeeReviews(employeeId)),
    postFinishEmployeeReview: (employeeId, reviewId) => dispatch(postFinishEmployeeReview(employeeId, reviewId)),
  };
}

const EmployeeContainer = connect(mapStateToProps, mapDispatchToProps)(Employee);

export default EmployeeContainer;
