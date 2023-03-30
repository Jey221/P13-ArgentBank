import { createSlice } from '@reduxjs/toolkit';
import { userLogin } from './userActions';

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null;

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.userToken;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default userSlice.reducer;

/* import { createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
import { accountService } from '../utils/accountService';

const initialState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  token: '',
  isLogged: false,
};

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

// 'Bearer' + accountService.getToken();

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersRequest());
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${accountService.getToken('token')}`,
      },
    };
    const res = await axios.post(
      'http://localhost:3001/api/v1/user/profile',
      config
    );
    dispatch(fetchUsersSuccess(res.data));
    console.log('res.data', res.data);
  } catch (error) {
    dispatch(fetchUsersFailure(error.message));
  }
};

const userReducer = createReducer(initialState, {
  [fetchUsersRequest.type]: (state) => {
    state.isLogged = true;
  },
  [fetchUsersSuccess.type]: (state, action) => {
    state.isLogged = true;
    state.email = action.payload.email;
    state.password = action.payload.password;
    state.firstName = action.payload.firstName;
    state.lastName = action.payload.lastName;
  },
  [fetchUsersFailure.type]: (state, action) => {
    state.isLogged = false;
  },
});

export default userReducer;
 */
