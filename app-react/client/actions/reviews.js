import webutils from '../api/webutils';
import {
  GET_PENDING_EMPLOYEE_REVIEWS,
  GET_FEEDBACKS_EMPLOYEE_REVIEWS,
  POST_FINISH_EMPLOYEE_REVIEW,
  GET_EMPLOYEE_REVIEW,
  PUT_EMPLOYEE_REVIEW,
  GET_ADMIN_REVIEWS
} from '../api/endpoints';
import ReviewApi from '../api/review';


export const GET_PENDING_EMPLOYEE_REVIEWS_START = 'GET_PENDING_EMPLOYEE_REVIEWS_START';
export function getPendingEmployeeReviewsStart() {
  return {
    type: GET_PENDING_EMPLOYEE_REVIEWS_START
  };
}

export const GET_PENDING_EMPLOYEE_REVIEWS_SUCCESS = 'GET_PENDING_EMPLOYEE_REVIEWS_SUCCESS';
export function getPendingEmployeeReviewsSuccess(response) {
  return {
    type: GET_PENDING_EMPLOYEE_REVIEWS_SUCCESS,
    response
  };
}

export const GET_PENDING_EMPLOYEE_REVIEWS_ERROR = 'GET_PENDING_EMPLOYEE_REVIEWS_ERROR';
export function getPendingEmployeeReviewsError(response) {
  return {
    type: GET_PENDING_EMPLOYEE_REVIEWS_ERROR,
    response
  };
}

export function getPendingEmployeeReviews(employeeId) {
  return dispatch => {
    dispatch(getPendingEmployeeReviewsStart());
    return ReviewApi
      .getPendingEmployeeReviews(employeeId)
      .then(response => dispatch(getPendingEmployeeReviewsSuccess(response)))
      .catch(response => dispatch(getPendingEmployeeReviewsError(response)))
  }
}

export const GET_FEEDBACKS_EMPLOYEE_REVIEWS_START = 'GET_FEEDBACKS_EMPLOYEE_REVIEWS_START';
export function getFeedbacksEmployeeReviewsStart() {
  return {
    type: GET_FEEDBACKS_EMPLOYEE_REVIEWS_START
  };
}

export const GET_FEEDBACKS_EMPLOYEE_REVIEWS_SUCCESS = 'GET_FEEDBACKS_EMPLOYEE_REVIEWS_SUCCESS';
export function getFeedbacksEmployeeReviewsSuccess(response) {
  return {
    type: GET_FEEDBACKS_EMPLOYEE_REVIEWS_SUCCESS,
    response
  };
}

export const GET_FEEDBACKS_EMPLOYEE_REVIEWS_ERROR = 'GET_FEEDBACKS_EMPLOYEE_REVIEWS_ERROR';
export function getFeedbacksEmployeeReviewsError(response) {
  return {
    type: GET_FEEDBACKS_EMPLOYEE_REVIEWS_ERROR,
    response
  };
}

export function getFeedbacksEmployeeReviews(employeeId) {
  return dispatch => {
    dispatch(getFeedbacksEmployeeReviewsStart());
    return ReviewApi
      .getFeedbacksEmployeeReviews(employeeId)
      .then(response => dispatch(getFeedbacksEmployeeReviewsSuccess(response)))
      .catch(response => dispatch(getFeedbacksEmployeeReviewsError(response)))
  }
}

export const POST_FINISH_EMPLOYEE_REVIEW_START = 'POST_FINISH_EMPLOYEE_REVIEW_START';
export function postFinishEmployeeReviewStart() {
  return {
    type: POST_FINISH_EMPLOYEE_REVIEW_START
  };
}

export const POST_FINISH_EMPLOYEE_REVIEW_SUCCESS = 'POST_FINISH_EMPLOYEE_REVIEW_SUCCESS';
export function postFinishEmployeeReviewSuccess(response) {
  return {
    type: POST_FINISH_EMPLOYEE_REVIEW_SUCCESS,
    response
  };
}

export const POST_FINISH_EMPLOYEE_REVIEW_ERROR = 'POST_FINISH_EMPLOYEE_REVIEW_ERROR';
export function postFinishEmployeeReviewError(response) {
  return {
    type: POST_FINISH_EMPLOYEE_REVIEW_ERROR,
    response
  };
}

export function postFinishEmployeeReview(employeeId, reviewId) {
  return dispatch => {
    dispatch(postFinishEmployeeReviewStart());
    return ReviewApi
      .postFinishEmployeeReview(employeeId, reviewId)
      .then(response => {
        dispatch(postFinishEmployeeReviewSuccess(response));
        dispatch(getPendingEmployeeReviews(employeeId));
        dispatch(getFeedbacksEmployeeReviews(employeeId));
      })
      .catch(response => dispatch(postFinishEmployeeReviewError(response)))
  }
}


export const GET_EMPLOYEE_REVIEW_START = 'GET_EMPLOYEE_REVIEW_START';
export function getEmployeeReviewStart() {
  return {
    type: GET_EMPLOYEE_REVIEW_START
  };
}

export const GET_EMPLOYEE_REVIEW_SUCCESS = 'GET_EMPLOYEE_REVIEW_SUCCESS';
export function getEmployeeReviewSuccess(response) {
  return {
    type: GET_EMPLOYEE_REVIEW_SUCCESS,
    response
  };
}

export const GET_EMPLOYEE_REVIEW_ERROR = 'GET_EMPLOYEE_REVIEW_ERROR';
export function getEmployeeReviewError(response) {
  return {
    type: GET_EMPLOYEE_REVIEW_ERROR,
    response
  };
}

export function getEmployeeReview(employeeId, reviewId) {
  return dispatch => {
    dispatch(getEmployeeReviewStart());
    return ReviewApi
      .getEmployeeReview(employeeId, reviewId)
      .then(response => dispatch(getEmployeeReviewSuccess(response)))
      .catch(response => dispatch(getEmployeeReviewError(response)))
  }
}

export const PUT_EMPLOYEE_REVIEW_START = 'PUT_EMPLOYEE_REVIEW_START';
export function putEmployeeReviewStart() {
  return {
    type: PUT_EMPLOYEE_REVIEW_START
  };
}

export const PUT_EMPLOYEE_REVIEW_SUCCESS = 'PUT_EMPLOYEE_REVIEW_SUCCESS';
export function putEmployeeReviewSuccess(response) {
  return {
    type: PUT_EMPLOYEE_REVIEW_SUCCESS,
    response
  };
}

export const PUT_EMPLOYEE_REVIEW_ERROR = 'PUT_EMPLOYEE_REVIEW_ERROR';
export function putEmployeeReviewError(response) {
  return {
    type: PUT_EMPLOYEE_REVIEW_ERROR,
    response
  };
}

export function putEmployeeReview(employeeId, reviewId, data) {
  return dispatch => {
    dispatch(putEmployeeReviewStart());
    return ReviewApi
      .putEmployeeReview(employeeId, reviewId, { review: data })
      .then(response => dispatch(putEmployeeReviewSuccess(response)))
      .catch(response => dispatch(putEmployeeReviewError(response)))
  }
}

export const GET_ADMIN_REVIEWS_START = 'GET_ADMIN_REVIEWS_START';
export function getAdminReviewsStart() {
  return {
    type: GET_ADMIN_REVIEWS_START
  }
}

export const GET_ADMIN_REVIEWS_SUCCESS = 'GET_ADMIN_REVIEWS_SUCCESS';
export function getAdminReviewsSuccess(response) {
  return {
    type: GET_ADMIN_REVIEWS_SUCCESS,
    response
  }
}

export const GET_ADMIN_REVIEWS_ERROR = 'GET_ADMIN_REVIEWS_ERROR';
export function getAdminReviewsError(response) {
  return {
    type: GET_ADMIN_REVIEWS_ERROR,
    response
  }
}

export function getAdminReviews() {
  return dispatch => {
    dispatch(getAdminReviewsStart());
    return ReviewApi
      .getAllAsAdmin()
      .then(response => dispatch(getAdminReviewsSuccess(response)))
      .catch(response => dispatch(getAdminReviewsError(response)))
  }
}
