import Axios from './AxiosParam.js';

/**
 * The code defines three functions for logging in, getting user profiles, and editing user profiles
 * using Axios.
 * @param inputs - An object containing the user's login credentials (e.g. email and password).
 * @returns Three functions are being returned, each of which makes an Axios request to a different
 * endpoint.
 */
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
