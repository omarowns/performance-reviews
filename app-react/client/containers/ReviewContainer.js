import { connect } from 'react-redux';
import Review from '../components/Review';
import {
  getPendingEmployeeReviews,
  getFeedbacksEmployeeReviews,
  postFinishEmployeeReview,
  getEmployeeReview,
  putEmployeeReview
} from '../actions/reviews';


function mapStateToProps(state) {
  return {
    review: state.reviews.review
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEmployeeReview: (employeeId, reviewId) => dispatch(getEmployeeReview(employeeId, reviewId)),
    putEmployeeReview: (employeeId, reviewId, data) => dispatch(putEmployeeReview(employeeId, reviewId, data))
  };
}

const ReviewContainer = connect(mapStateToProps, mapDispatchToProps)(Review);

export default ReviewContainer;
