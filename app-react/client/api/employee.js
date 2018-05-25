import webutils from './webutils';
import {
  GET_EMPLOYEES,
  GET_EMPLOYEE,
  GET_EMPLOYEE_REVIEW,
  PUT_EMPLOYEE_REVIEW,
  GET_ADMIN_EMPLOYEES,
  GET_ADMIN_EMPLOYEE,
  PUT_ADMIN_EMPLOYEE
} from './endpoints';

export default {
  getAll: () => webutils.get(GET_EMPLOYEES),
  get: (id) => webutils.get(GET_EMPLOYEE.replace(':id', id)),
  getEmployeeReview: (employeeId, reviewId) => {
    return webutils.get(GET_EMPLOYEE_REVIEW.replace(':employee_id', employee_id).replace(':id', reviewId));
  },
  putEmployeeReview: (employeeId, reviewId, data) => {
    return webutils
      .put(PUT_EMPLOYEE_REVIEW.replace(':employee_id', employee_id).replace(':id', reviewId), data);
  },
  getAllAsAdmin: () => webutils.get(GET_ADMIN_EMPLOYEES),
  getAsAdmin: (id) => webutils.get(GET_ADMIN_EMPLOYEE.replace(':id', id)),
  putAsAdmin: (id, data) => webutils.put(PUT_ADMIN_EMPLOYEE.replace(':id', id), data)
}
