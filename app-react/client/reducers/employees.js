import {
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_ERROR,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_ERROR,
  GET_ADMIN_EMPLOYEES_SUCCESS,
  GET_ADMIN_EMPLOYEES_ERROR,
  GET_ADMIN_EMPLOYEE_SUCCESS,
  GET_ADMIN_EMPLOYEE_ERROR
} from '../actions/employees';

const INITIAL_STATE = {
  employees: [],
  employee: null,
  errors: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EMPLOYEES_SUCCESS:
      return { ...state, employees: action.response.body.data };
    case GET_EMPLOYEES_ERROR:
      return { ...state, errors: action.response.body };
    case GET_EMPLOYEE_SUCCESS:
      return { ...state, employee: action.response.body.data };
    case GET_EMPLOYEE_ERROR:
      return { ...state, errors: action.response.body };
    case GET_ADMIN_EMPLOYEES_SUCCESS:
      return { ...state, employees: action.response.body.data };
    case GET_ADMIN_EMPLOYEES_ERROR:
      return { ...state, errors: action.response.body };
    case GET_ADMIN_EMPLOYEE_SUCCESS:
      return { ...state, employee: action.response.body.data };
    case GET_ADMIN_EMPLOYEE_ERROR:
      return { ...state, error: action.response.body };
    default:
      return state;
  }
}
