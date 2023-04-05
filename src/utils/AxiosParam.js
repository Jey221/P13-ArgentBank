import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://localhost:3001',
});

let isLogged = () => {
  let log = localStorage.getItem('token');
  return !!log;
};

const token = localStorage.getItem('token');

/**
 * Intercepteur pour le token
 */
Axios.interceptors.request.use((request) => {
  if (isLogged()) {
    request.headers.Authorization = 'Bearer' + token;
  }

  return request;
});

export default Axios;
