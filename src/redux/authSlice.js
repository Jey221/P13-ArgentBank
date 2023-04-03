import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  token: '',
  isLogged: false,
  loading: false,
  error: '',
  firstName: '',
  lastName: '',
};

export const loginUser = createAsyncThunk('loginuser', async (body) => {
  const res = await fetch('http://localhost:3001/api/v1/user/login', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});
export const infoUser = createAsyncThunk('infouser', async (body) => {
  const res = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem('token');
    },
    addemail: (state, action) => {
      state.email = localStorage.getItem('email');
    },
    logout: (state, action) => {
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    /* **************************LOGIN******************** */
    [loginUser.pending]: (state, action) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (
      state,
      { payload: { error, msg, email, token, isLogged } }
    ) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
        state.email = email;
        state.token = token;
        state.isLogged = true;

        localStorage.setItem('msg', msg);
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('token', token);
      }
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    /* **************************INFO******************** */

    [infoUser.pending]: (state, action) => {
      state.loading = true;
    },
    [infoUser.fulfilled]: (
      state,
      { payload: { error, firstName, lastName } }
    ) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.firstName = firstName;
        state.lastName = lastName;
        state.isLogged = true;

        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', JSON.stringify(lastName));
      }
    },
    [infoUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addToken, addUser, logout } = authSlice.actions;

export default authSlice.reducer;
