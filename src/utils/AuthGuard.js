import { Navigate } from 'react-router-dom';
import React from 'react';

const AuthGuard = ({ children }) => {
  let logged = false;
  console.log(logged);

  if (!logged) {
    return <Navigate to="/SignIn" />;
  }
  return children;
};

export default AuthGuard;
