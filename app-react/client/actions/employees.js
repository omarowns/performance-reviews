import webutils from '../api/webutils';
import {
  GET_EMPLOYEES,
  GET_EMPLOYEE,
  GET_ADMIN_EMPLOYEES,
  GET_ADMIN_EMPLOYEE,
  PUT_ADMIN_EMPLOYEE,
  DELETE_ADMIN_EMPLOYEE
} from '../api/endpoints';
import EmployeeApi from '../api/employee';
import { getAdminReviews } from './reviews';

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

export const GET_ADMIN_EMPLOYEES_START = 'GET_ADMIN_EMPLOYEES_START';
export function getAdminEmployeesStart() {
  return {
    type: GET_ADMIN_EMPLOYEES_START
  }
}

export const GET_ADMIN_EMPLOYEES_SUCCESS = 'GET_ADMIN_EMPLOYEES_SUCCESS';
export function getAdminEmployeesSuccess(response) {
  return {
    type: GET_ADMIN_EMPLOYEES_SUCCESS,
    response
  }
}

export const GET_ADMIN_EMPLOYEES_ERROR = 'GET_ADMIN_EMPLOYEES_ERROR';
export function getAdminEmployeesError(response) {
  return {
    type: GET_ADMIN_EMPLOYEES_ERROR,
    response
  }
}

export function getAdminEmployees() {
  return dispatch => {
    dispatch(getAdminEmployeesStart());
    return EmployeeApi
      .getAllAsAdmin()
      .then(response => dispatch(getAdminEmployeesSuccess(response)))
      .catch(response => dispatch(getAdminEmployeesError(response)))
  }
}

export const GET_ADMIN_EMPLOYEE_START = 'GET_ADMIN_EMPLOYEE_START';
export function getAdminEmployeeStart() {
  return {
    type: GET_ADMIN_EMPLOYEE_START
  }
}

export const GET_ADMIN_EMPLOYEE_SUCCESS = 'GET_ADMIN_EMPLOYEE_SUCCESS';
export function getAdminEmployeeSuccess(response) {
  return {
    type: GET_ADMIN_EMPLOYEE_SUCCESS,
    response
  }
}

export const GET_ADMIN_EMPLOYEE_ERROR = 'GET_ADMIN_EMPLOYEE_ERROR';
export function getAdminEmployeeError(response) {
  return {
    type: GET_ADMIN_EMPLOYEE_ERROR,
    response
  }
}

export function getAdminEmployee(employeeId) {
  return dispatch => {
    dispatch(getAdminEmployeeStart());
    return EmployeeApi
      .getAsAdmin(employeeId)
      .then(response => dispatch(getAdminEmployeeSuccess(response)))
      .catch(response => dispatch(getAdminEmployeeError(response)))
  }
}

export const PUT_ADMIN_EMPLOYEE_START = 'PUT_ADMIN_EMPLOYEE_START';
export function putAdminEmployeeStart() {
  return {
    type: PUT_ADMIN_EMPLOYEE_START
  }
}

export const PUT_ADMIN_EMPLOYEE_SUCCESS = 'PUT_ADMIN_EMPLOYEE_SUCCESS';
export function putAdminEmployeeSuccess(response) {
  return {
    type: PUT_ADMIN_EMPLOYEE_SUCCESS,
    response
  }
}

export const PUT_ADMIN_EMPLOYEE_ERROR = 'PUT_ADMIN_EMPLOYEE_ERROR';
export function putAdminEmployeeError(response) {
  return {
    type: PUT_ADMIN_EMPLOYEE_ERROR,
    response
  }
}

export function putAdminEmployee(employeeId, data) {
  return dispatch => {
    dispatch(putAdminEmployeeStart());
    return EmployeeApi
      .putAsAdmin(employeeId, { employee: data })
      .then(response => dispatch(putAdminEmployeeSuccess(response)))
      .catch(response => dispatch(putAdminEmployeeError(response)))
  }
}

export const DELETE_ADMIN_EMPLOYEE_START = 'DELETE_ADMIN_EMPLOYEE_START';
export function deleteAdminEmployeeStart() {
  return {
    type: DELETE_ADMIN_EMPLOYEE_START
  }
}

export const DELETE_ADMIN_EMPLOYEE_SUCCESS = 'DELETE_ADMIN_EMPLOYEE_SUCCESS';
export function deleteAdminEmployeeSuccess(response) {
  return {
    type: DELETE_ADMIN_EMPLOYEE_SUCCESS,
    response
  }
}

export const DELETE_ADMIN_EMPLOYEE_ERROR = 'DELETE_ADMIN_EMPLOYEE_ERROR';
export function deleteAdminEmployeeError(response) {
  return {
    type: DELETE_ADMIN_EMPLOYEE_ERROR,
    response
  }
}

export function deleteAdminEmployee(employeeId) {
  return dispatch => {
    dispatch(deleteAdminEmployeeStart());
    return EmployeeApi
      .deleteAsAdmin(employeeId)
      .then(response => {
        dispatch(deleteAdminEmployeeSuccess(response));
        dispatch(getAdminEmployees());
        dispatch(getAdminReviews());
      })
      .catch(response => dispatch(deleteAdminEmployeeError(response)))
  }
}
