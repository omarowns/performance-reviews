import webutils from './webutils';
import {
  GET_EMPLOYEES,
  GET_EMPLOYEE,
  GET_ADMIN_EMPLOYEES,
  GET_ADMIN_EMPLOYEE,
  PUT_ADMIN_EMPLOYEE
} from './endpoints';

export default {
  getAll: () => webutils.get(GET_EMPLOYEES),
  get: (id) => webutils.get(GET_EMPLOYEE.replace(':id', id)),
  getAllAsAdmin: () => webutils.get(GET_ADMIN_EMPLOYEES),
  getAsAdmin: (id) => webutils.get(GET_ADMIN_EMPLOYEE.replace(':id', id)),
  putAsAdmin: (id, data) => webutils.put(PUT_ADMIN_EMPLOYEE.replace(':id', id), data)
}
