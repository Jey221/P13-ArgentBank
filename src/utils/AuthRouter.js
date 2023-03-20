import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../pages/SignIn';

const AuthRouter = () => {
  return (
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="SignIn" element={<SignIn />} />
    </Routes>
  );
};

export default AuthRouter;
