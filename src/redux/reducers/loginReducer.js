import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogged: false,
  authenticated: false,
  error: '',
  loading: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginPending: (state) => {
      state.loading = true;
    },
    loginSuccess: (state) => {
      state.isLogged = true;
      state.authenticated = true;
    },
    loginFailure: (state, actions) => {
      state.isLogged = false;
      state.error = actions.payload;
    },
    logout: (state) => {
      state.authenticated = false;
    },
  },
});

export const { loginPending, loginSuccess, loginFailure } = loginSlice.actions;
export default loginSlice.reducer;
