import Axios from './AxiosParam.js';

let getUsers = () => {
  return Axios.post('/api/v1/user/profile');
};

let editUsers = (updateUser) => {
  return Axios.put('/api/v1/user/profile', updateUser);
};

export const userService = {
  getUsers,
  editUsers,
};
