import webutils from './webutils';
import {
  GET_PENDING_EMPLOYEE_REVIEWS,
  GET_FEEDBACKS_EMPLOYEE_REVIEWS,
  POST_FINISH_EMPLOYEE_REVIEW,
  GET_EMPLOYEE_REVIEW,
  PUT_EMPLOYEE_REVIEW,
  GET_ADMIN_REVIEWS
} from './endpoints';

export default {
  getPendingEmployeeReviews: (employeeId) => webutils.get(GET_PENDING_EMPLOYEE_REVIEWS.replace(':employee_id', employeeId)),
  getFeedbacksEmployeeReviews: (employeeId) => webutils.get(GET_FEEDBACKS_EMPLOYEE_REVIEWS.replace(':employee_id', employeeId)),
  postFinishEmployeeReview: (employeeId, reviewId) => {
    return webutils
      .post(POST_FINISH_EMPLOYEE_REVIEW
        .replace(':employee_id', employeeId)
        .replace(':id', reviewId),
        {}
      );
  },
  getEmployeeReview: (employeeId, reviewId) => {
    return webutils
      .get(GET_EMPLOYEE_REVIEW
        .replace(':employee_id', employeeId)
        .replace(':id', reviewId)
      );
  },
  putEmployeeReview: (employeeId, reviewId, body) => {
    return webutils
      .put(GET_EMPLOYEE_REVIEW
        .replace(':employee_id', employeeId)
        .replace(':id', reviewId),
        body
      );
  },
  getAllAsAdmin: () => webutils.get(GET_ADMIN_REVIEWS)
}
