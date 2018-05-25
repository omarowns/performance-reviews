import webutils from './webutils';
import {
  GET_EMPLOYEES,
  GET_EMPLOYEE,
  GET_ADMIN_EMPLOYEES
} from './endpoints';

export default {
  getAll: () => webutils.get(GET_EMPLOYEES),
  get: (id) => webutils.get(GET_EMPLOYEE.replace(':id', id)),
  getAllAsAdmin: () => webutils.get(GET_ADMIN_EMPLOYEES)
}
