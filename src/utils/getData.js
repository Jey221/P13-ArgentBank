import Axios from './AxiosParam.js';

let getUsers = () => {
  return Axios.put('/api/v1/user/profile');
};

export const userService = {
  getUsers,
};
