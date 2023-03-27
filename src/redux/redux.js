import { configureStore, createSlice } from '@reduxjs/toolkit';
import Axios from '../utils/AxiosParam';

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
});

export const mainStore = configureStore({
  reducer: {
    User: userSlice.reducer,
  },
});
