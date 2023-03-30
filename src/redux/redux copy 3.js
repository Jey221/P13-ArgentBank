import axios from 'axios';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  user: null,
};

const FETCHING = 'users/fetching';
const RESOLVED = 'users/resolved';
const REJECTED = 'users/rejected';

export const loadUser = () => async (dispatch, getState) => {
  try {
    dispatch({ type: FETCHING });

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${getState().auth.token}`,
      },
    };
    const res = await axios.post(
      'http://localhost:3001/api/v1/user/profile',
      config
    );
    dispatch({
      type: RESOLVED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REJECTED,
    });
  }
};
