import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://localhost:3001',
});

let isLogged = () => {
  let log = localStorage.getItem('token');
  return !!log;
};

let token = localStorage.getItem('token');

/**
 * Intercepteur pour le token
 */
/* This code is creating an interceptor for Axios requests. The interceptor is checking if the user is
logged in by calling the `isLogged()` function. If the user is logged in, it adds an `Authorization`
header to the request with a bearer token retrieved from local storage. The interceptor then returns
the modified request object. */
Axios.interceptors.request.use((request) => {
  if (isLogged()) {
    request.headers.Authorization = 'Bearer' + token;
  }

  return request;
});

export default Axios;
