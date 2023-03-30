import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './redux copy 2';
import userReducer from './redux';
// import PostReducer from './redux copy';
// import { combineReducers, createStore } from 'redux';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

/* const reducer = combineReducers({
  users: userReducer,
});

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.___REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, reduxDevtools);
 */
/* export default configureStore({
  reducer: {
    post: PostReducer,
  },
});
 */
/*
 */
/* const store2 = configureStore({
  reducer: {
    user: dataSlice,
  },
});
export default store;
 */
