import axios from 'axios';

export const GET_USER = 'GET_USER';

export const getUsers = (data) => {
  return (dispatch) => {
    console.log('config', localStorage.getItem('token'));
    const config = {
      headers: {
        Authorization: `Bearer` + localStorage.getItem('token'),
      },
    };
    return axios
      .post('http://localhost:3001/api/v1/user/profile', config)
      .then((res) => {
        console.log('res', res);
        // dispatch({ type: GET_USER, payload: data });
      });
  };
};
