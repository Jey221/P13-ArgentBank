// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import produce from 'immer';

const initialState = {
  status: 'void',
  data: null,
  error: null,
};

const FETCHING = 'users/fetching';
const RESOLVED = 'users/resolved';
const REJECTED = 'users/rejected';

/* const usersFetching = () => ({ type: FETCHING });
const usersResolved = (data) => ({ type: RESOLVED, payload: data });
const usersRejected = (error) => ({ type: REJECTED, payload: error });
 */
export default function userReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case FETCHING: {
        if (draft.status === 'void') {
          draft.status = 'pending';
          return;
        }
        if (draft.status === 'rejected') {
          draft.error = null;
          draft.status = 'pending';
          return;
        }
        if (draft.status === 'resolved') {
          draft.status = 'updating';
          return;
        }
        return;
      }
      case RESOLVED: {
        if (draft.status === 'pending' || draft.status === 'updating') {
          draft.data = action.payload;
          draft.status = 'resolved';
          return;
        }
        return;
      }
      case REJECTED: {
        if (draft.status === 'pending' || draft.status === 'updating') {
          draft.error = action.payload;
          draft.data = null;
          draft.status = 'rejected';
          return;
        }
        return;
      }
      default:
        return;
    }
  });
}

/* 


import { createAction, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
import { userService } from '../utils/getData';
export const getUsers = createAction('getUsers/data');

const initialState = {
  firstName: '',
};

export const dataSlice = createReducer(initialState, (builder) => {
  builder.addCase(getUsers, (state, action) => {
    state.firstName = action.payload;
  });
});





const getAll = createAsyncThunk('User/getData', (arg, { rejectWithValue }) => {
  try {
    const { data } = Axios.post('/api/v1/user/profile');
    return data;
  } catch (error) {
    rejectWithValue(error.response.data);
  }
});

******************************************************************

const initialState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  token: '',
  isLogged: false,
};

const userSlice = createSlice({
  name: 'User',
  initialState: initialState,
  reducers: {
    userToken(state, action) {
      state.token = action.payload.body.token;
    },
    userInfo(state, action) {
      userService
        .getUsers()
        .then((res) => {
          console.log(res.data.body.firstName);
          state.firstName = res.data.body.firstName;
        })
        .catch((err) => console.log('err', err));
    },
    userLogin(state, action) {
      state.isLogged = true;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    userUpdate(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    userLogout() {
      return initialState;
    },
  },
  extraReducers: () => {},
});

export const mainStore = configureStore({
  reducer: {
    User: userSlice.reducer,
  },
});

 */
