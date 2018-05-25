import webutils from './webutils';
import {
  GET_EMPLOYEES,
  GET_EMPLOYEE
} from './endpoints';

export default {
  getAll: () => webutils.get(GET_EMPLOYEES),
  get: (id) => webutils.get(GET_EMPLOYEE.replace(':id', id))
}
