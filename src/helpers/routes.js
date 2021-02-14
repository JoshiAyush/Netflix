import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={() => {
                if (!user)
                    return children;

                if (user)
                    return <Redirect to={{ pathname: loggedInPath }} />;

                return null;
            }}
        />
    );
}

export function ProtectedRoute({ user, signedInPath, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (user)
                    return children;

                if (!user)
                    return <Redirect to={{ pathname: signedInPath, state: { from: location } }} />;

                return null;
            }}
        />
    );
}