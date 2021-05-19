import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  /**
   * @function IsUserRedirect() redirects the user to the logged in path if user have already logged in.
   *
   * @argument {Object} Object.user is the user object it is null if there is no logged in user data.
   * @argument {String} Object.loggedInPath is the route to browse page if user exists.
   * @argument {Object} Object.children is the children component that we need to return if user doesn't exist.
   * @argument {Obejct} Object.rest we spread these additional properties over the Route component.
   *
   * @return {Object} children if user doesn't exist otherwise if no case met return null.
   */
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) return children;

        if (user) return <Redirect to={{ pathname: loggedInPath }} />;

        return null;
      }}
    />
  );
}

export function ProtectedRoute({ user, signedInPath, children, ...rest }) {
  /**
   * @function ProtectedRoute() protects the page that can only be visited by a authorized user.
   *
   * @argument {Object} Object.user is the authorized user.
   * @argument {String} Object.signedInPath is the signed in path where we need to redirect the user to if user doesn't exist.
   * @argument {Object} Object.children is the react component (protected route) that we need to return if there is a authorized user.
   * @argument {Object} Object.rest we spread these additional properties over the Route component.
   *
   * @return {Object} protected route if user exists otherwise signed in path or null.
   */
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) return children;

        if (!user)
          return (
            <Redirect
              to={{ pathname: signedInPath, state: { from: location } }}
            />
          );

        return null;
      }}
    />
  );
}
