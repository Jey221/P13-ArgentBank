import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../pages/SignIn';

/**
 * The function returns a router component with two routes, one for the index and one for the "SignIn"
 * path, both rendering the "SignIn" component.
 * @returns The `AuthRouter` component is being returned. It is a router component that defines two
 * routes using the `Routes` and `Route` components from React Router. The first route is the index
 * route, which renders the `SignIn` component. The second route is the `SignIn` route, which also
 * renders the `SignIn` component.
 */
const AuthRouter = () => {
  return (
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="SignIn" element={<SignIn />} />
    </Routes>
  );
};

export default AuthRouter;
