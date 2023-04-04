import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './reducers/loginReducer';
import profilSlice from './reducers/profilReducer';

const store = configureStore({
  reducer: {
    login: loginSlice,
    profil: profilSlice,
  },
});

export default store;
