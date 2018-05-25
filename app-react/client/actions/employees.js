import webutils from '../api/webutils';
import {
  GET_EMPLOYEES,
  GET_EMPLOYEE
} from '../api/endpoints';
import EmployeeApi from '../api/employee';

export const GET_EMPLOYEES_START = 'GET_EMPLOYEES_START';
export function getEmployeesStart() {
  return {
    type: GET_EMPLOYEE_START
  }
}

export const GET_EMPLOYEES_SUCCESS = 'GET_EMPLOYEES_SUCCESS';
export function getEmployeesSuccess(response) {
  return {
    type: GET_EMPLOYEES_SUCCESS,
    response
  }
}

export const GET_EMPLOYEES_ERROR = 'GET_EMPLOYEES_ERROR';
export function getEmployeesError(response) {
  return {
    type: GET_EMPLOYEES_ERROR,
    response
  }
}

export function getEmployees() {
  return dispatch => {
    dispatch(getEmployeesStart());
    return EmployeeApi
      .getAll()
      .then(response => dispatch(getEmployeesSuccess(response)))
      .catch(response => dispatch(getEmployeesError(response)));
  }
}

export const GET_EMPLOYEE_START = 'GET_EMPLOYEE_START';
export function getEmployeeStart() {
  return {
    type: GET_EMPLOYEE_START
  }
}

export const GET_EMPLOYEE_SUCCESS = 'GET_EMPLOYEE_SUCCESS';
export function getEmployeeSucess(response) {
  return {
    type: GET_EMPLOYEE_SUCCESS,
    response
  }
}

export const GET_EMPLOYEE_ERROR = 'GET_EMPLOYEE_ERROR';
export function getEmployeeError(response) {
  return {
    type: GET_EMPLOYEE_ERROR,
    response
  }
}

export function getEmployee(id) {
  return dispatch => {
    dispatch(getEmployeeStart());
    return EmployeeApi
      .get(id)
      .then(response => dispatch(getEmployeeSucess(response)))
      .catch(response => dispatch(getEmployeeError(response)))
  }
}
