import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogged: false,
  authenticated: false,
  error: '',
  loading: false,
  userInfos: '',
};

const profilSlice = createSlice({
  name: 'profil',
  initialState,
  reducers: {
    profilPending: (state) => {
      state.loading = true;
    },
    profilSuccess: (state, actions) => {
      state.isLogged = true;
      state.authenticated = true;
      state.userInfos = actions.payload;
    },
    profilFailure: (state, actions) => {
      state.isLogged = false;
      state.error = actions.payload;
    },
    profilOut: (state) => {
      state.isLogged = false;
      state.authenticated = false;
      state.userInfos = '';
    },
  },
});

export const { profilPending, profilSuccess, profilFailure, profilOut } =
  profilSlice.actions;
export default profilSlice.reducer;
