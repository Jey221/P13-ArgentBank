import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './redux';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
