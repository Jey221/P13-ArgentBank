import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'User',
  initialState: {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    id: '',
  },
  reducers: {},
});

export const mainStore = configureStore({
  reducer: {
    User: userSlice.reducer,
  },
});
