import { createSlice } from '@reduxjs/toolkit';

/* `initialState` is a constant variable that holds the initial state of the `login` slice. It contains
four properties: `isLogged`, `authenticated`, `error`, and `loading`. These properties are used to
keep track of the login status of the user. `isLogged` and `authenticated` are boolean values that
indicate whether the user is logged in or not. `error` is an empty string that will be used to store
any error messages that may occur during the login process. `loading` is a boolean value that
indicates whether the login process is currently in progress or not. */
const initialState = {
  isLogged: false,
  authenticated: false,
  error: '',
  loading: false,
};

/* This code is creating a Redux slice using the `createSlice` function from the `@reduxjs/toolkit`
library. The slice is named "login" and has an initial state defined by the `initialState` constant.
The slice also has four reducers: `loginPending`, `loginSuccess`, `loginFailure`, and
`logoutAction`. These reducers are functions that modify the state of the slice based on actions
dispatched to the Redux store. For example, the `loginPending` reducer sets the `loading` property
of the state to `true`. The `createSlice` function automatically generates action creators for each
reducer, which can be used to dispatch actions to the store. The slice and its action creators are
exported from the module. */
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
    logoutAction: (state) => {
      state.isLogged = false;
      state.authenticated = false;
    },
  },
});

export const { loginPending, loginSuccess, loginFailure, logoutAction } =
  loginSlice.actions;
export default loginSlice.reducer;
