import { Navigate } from 'react-router-dom';
import React from 'react';
/* import { accountService } from './accountService';
import { loginUser } from '../redux/authSlice';
 */ import { useSelector } from 'react-redux';

const AuthGuard = ({ children }) => {
  const loc = useSelector((state) => state.user.isLogged);
  console.log('loc3', loc);
  if (loc === false) {
    return <Navigate to="/SignIn" />;
  }
  return children;
};

export default AuthGuard;
