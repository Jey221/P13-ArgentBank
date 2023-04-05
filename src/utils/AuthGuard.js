import { Navigate } from 'react-router-dom';
import React from 'react';

/**
 * The function checks if there is a token stored in the local storage and returns a boolean value
 * indicating if the user is logged in or not.
 * @returns The function `isLogged` returns a boolean value. It returns `true` if there is a token
 * stored in the local storage and `false` if there is no token. The double negation `!!` is used to
 * convert the truthy or falsy value of `token` into a boolean value.
 */
let isLogged = () => {
  let token = localStorage.getItem('token');
  return !!token;
};

/**
 * The AuthGuard function checks if the user is logged in and redirects them to the sign-in page if
 * they are not.
 * @returns If the user is not logged in, the component returns a `Navigate` component that redirects
 * the user to the `/SignIn` page. If the user is logged in, the component returns the `children` prop,
 * which represents the content that is wrapped by the `AuthGuard` component.
 */
const AuthGuard = ({ children }) => {
  if (!isLogged()) {
    return <Navigate to="/SignIn" />;
  }
  return children;
};

export default AuthGuard;
