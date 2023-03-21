import Axios from './getData';

let login = (inputs) => {
  return Axios.post('/api/v1/user/login', inputs);
};

let saveToken = (token) => {
  localStorage.setItem('token', token);
};

let logout = () => {
  localStorage.removeItem('token');
};

let isLogged = () => {
  let token = localStorage.getItem('token');
  return !!token;
};

export const accountService = {
  saveToken,
  login,
  logout,
  isLogged,
};
