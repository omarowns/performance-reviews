import {
  GET_PENDING_EMPLOYEE_REVIEWS_SUCCESS,
  GET_PENDING_EMPLOYEE_REVIEWS_ERROR,
  GET_FEEDBACKS_EMPLOYEE_REVIEWS_SUCCESS,
  GET_FEEDBACKS_EMPLOYEE_REVIEWS_ERROR,
  POST_FINISH_EMPLOYEE_REVIEW_SUCCESS,
  POST_FINISH_EMPLOYEE_REVIEW_ERROR,
  GET_EMPLOYEE_REVIEW_SUCCESS,
  GET_EMPLOYEE_REVIEW_ERROR,
  PUT_EMPLOYEE_REVIEW_SUCCESS,
  PUT_EMPLOYEE_REVIEW_ERROR
} from '../actions/reviews';

const INITIAL_STATE = {
  pendingReviews: [],
  feedbackReviews: [],
  review: null,
  errors: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PENDING_EMPLOYEE_REVIEWS_SUCCESS:
      return { ...state, pendingReviews: action.response.body };
    case GET_PENDING_EMPLOYEE_REVIEWS_ERROR:
      return { ...state, errors: action.response.body };
    case GET_FEEDBACKS_EMPLOYEE_REVIEWS_SUCCESS:
      return { ...state, feedbackReviews: action.response.body };
    case GET_FEEDBACKS_EMPLOYEE_REVIEWS_ERROR:
      return { ...state, errors: action.response.body };
    case POST_FINISH_EMPLOYEE_REVIEW_SUCCESS:
      return { ...state };
    case POST_FINISH_EMPLOYEE_REVIEW_ERROR:
      return { ...state, errors: action.response.body };
    case GET_EMPLOYEE_REVIEW_SUCCESS:
      return { ...state, review: action.response.body };
    case GET_EMPLOYEE_REVIEW_ERROR:
      return { ...state, errors: action.response.body };
    case PUT_EMPLOYEE_REVIEW_SUCCESS:
      return { ...state };
    case PUT_EMPLOYEE_REVIEW_ERROR:
      return { ...state, errors: action.response.body };
    default:
      return state;
  }
}
