import request from 'superagent';

const serverUrl = () => {
  // return process.env.SERVER_URL;
  return 'http://localhost:3000'
};

export default {
  get: (path) => {
    return request
      .get(`${serverUrl()}${path}`);
  },
  post: (path, body) => {
    return request
      .post(`${serverUrl()}${path}`)
      .send(body);
  },
  put: (path, body) => {
    return request
      .put(`${serverUrl()}${path}`)
      .send(body);
  },
  destroy: (path) => {
    return request
      .del(`${serverUrl()}${path}`);
  }
}
