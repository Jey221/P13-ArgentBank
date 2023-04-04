import Axios from './AxiosParam.js';

let login = (inputs) => {
  return Axios.post('/api/v1/user/login', inputs);
};

let getUsers = () => {
  return Axios.post('/api/v1/user/profile');
};

let editUsers = (updateUser) => {
  return Axios.put('/api/v1/user/profile', updateUser);
};

export const dataService = {
  login,
  getUsers,
  editUsers,
};
