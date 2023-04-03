import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './loginReducer';
import userReducer from './userReducer';

export default combineReducers({
  //REDUCERS
  loginReducer,
  userReducer,
});
