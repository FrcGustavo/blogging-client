/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (
  { component: Component, ...rest },
) => (
  <Route
    {...rest}
    render={(props) => {
      if (true) {
        return <Component {...props} />;
      }
      return (
        <Redirect
          to={{
            pathname: '/',
            state: {
              from: props.location,
            },
          }}
        />
      );
    }}
  />
);

export default ProtectedRoute;
/*
export const ProtectedRoute = (
  { component: Component, ...rest },
) => (
  <Route
    {...rest}
    render={(props) => {
      if (auth.isAuthenticated()) {
        return <Component {...props} />;
      }
      return (
        <Redirect
          to={{
            pathname: '/',
            state: {
              from: props.location,
            },
          }}
        />
      );
    }}
  />
); */
