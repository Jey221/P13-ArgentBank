import axios from 'axios';

export const GET_LOGIN = 'GET_LOGIN';

export const getLogin = () => {
  return (dispatch) => {
    return axios.post('http://localhost:3001/api/v1/user/login').then((res) => {
      console.log(res);
    });
  };
};
