import { Navigate } from 'react-router-dom';
import React from 'react';
import { accountService } from './accountService';

const AuthGuard = ({ children }) => {
  if (!accountService.isLogged()) {
    return <Navigate to="/SignIn" />;
  }
  return children;
};

export default AuthGuard;
