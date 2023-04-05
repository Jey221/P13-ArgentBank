import { createSlice } from '@reduxjs/toolkit';

/* `initialState` is a constant variable that holds the initial state of the `profil` slice. It
contains five properties: `isLogged`, `authenticated`, `error`, `loading`, and `userInfos`. These
properties are used to manage the state of the user's profile. `isLogged` and `authenticated` are
boolean values that indicate whether the user is logged in and authenticated, respectively. `error`
is an empty string that will be used to store any error messages. `loading` is a boolean value that
indicates whether the application is currently loading data. `userInfos` is an empty string that
will be used to store the user's information. */
const initialState = {
  isLogged: false,
  authenticated: false,
  error: '',
  loading: false,
  userInfos: '',
};

/* This code is creating a Redux slice using the `createSlice` function from the `@reduxjs/toolkit`
library. The slice is named `profil` and has an initial state defined by the `initialState`
constant. The slice has four reducers: `profilPending`, `profilSuccess`, `profilFailure`, and
`profilOut`. These reducers are responsible for updating the state of the `profil` slice based on
actions dispatched to the Redux store. Each reducer updates specific properties of the state object. */
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
