import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './reducers/loginReducer';
import profilSlice from './reducers/profilReducer';

/* This code is creating a Redux store using the `configureStore` function from the `@reduxjs/toolkit`
library. The store is configured with two reducers, `loginSlice` and `profilSlice`, which will
handle the state updates for the `login` and `profil` slices of the Redux store respectively. The
`store` constant is then exported for use in other parts of the application. */
const store = configureStore({
  reducer: {
    login: loginSlice,
    profil: profilSlice,
  },
});

export default store;
