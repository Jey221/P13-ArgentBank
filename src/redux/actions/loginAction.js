import axios from 'axios';

export const GET_LOGIN = 'GET_LOGIN';

export const getLogin = (input) => {
  return (dispatch) => {
    return axios
      .post('http://localhost:3001/api/v1/user/login', input)
      .then((res) => {
        console.log(res);
      });
  };
};
