import { createSlice } from '@reduxjs/toolkit';
// import { accountService } from '../utils/accountService';

const initialState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  token: '',
  isLogged: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.paiload;
    },
    logout: (state) => {
      state = initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
