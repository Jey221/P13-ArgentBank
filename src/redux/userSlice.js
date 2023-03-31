import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { accountService } from '../utils/accountService';

console.log('tok', accountService.getToken('token'));

const tok = accountService.getToken('token');

export const fetchUser = createAsyncThunk(
  'user/lol',
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer${tok}`,
        },
      };
      const { data } = await axios.post(
        'http://localhost:3001/api/v1/user/login',
        config
      );
      return data;
    } catch (error) {
      return error?.response;
    }
  }
);
const initialState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  token: '',
  isLogged: false,
};

const userSlices = createSlice({
  name: 'user',
  initialState: initialState,
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.usersList = action.payload;
      state.loading = false;
    },
    [fetchUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default userSlices.reducer;
