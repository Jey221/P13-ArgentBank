import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'User',
  initialState: {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    id: '',
    token: '',
    isLogged: false,
  },
  reducers: {},
});

export const mainStore = configureStore({
  reducer: {
    User: userSlice.reducer,
  },
});
