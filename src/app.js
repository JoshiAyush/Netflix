import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Home } from "./pages/index.js";
import { Browse } from "./pages/index.js";
import { SignIn } from "./pages/index.js";
import { SignUp } from "./pages/index.js";

import { HOME } from "./constants.js";
import { BROWSE } from "./constants.js";
import { SIGN_IN } from "./constants.js";
import { SIGN_UP } from "./constants.js";

import { IsUserRedirect } from "./helpers/routes.js";
import { ProtectedRoute } from "./helpers/routes.js";

import { UseAuthListener } from "./hooks/index.js";

function App() {
  // const { user } = UseAuthListener();
  const user = null;

  return (
    <Router>

      <IsUserRedirect
        exact
        user={user}
        path={HOME}
        loggedInPath={BROWSE}
      >

        <Home />

      </IsUserRedirect>

      <IsUserRedirect
        exact
        user={user}
        path={SIGN_UP}
        loggedInPath={BROWSE}
      >

        <SignUp />

      </IsUserRedirect>

      <IsUserRedirect
        exact
        user={user}
        path={SIGN_IN}
        loggedInPath={BROWSE}
      >

        <SignIn />

      </IsUserRedirect>

      <ProtectedRoute
        exact
        user={user}
        path={BROWSE}
        signedInPath={SIGN_IN}
      >

        <Browse />

      </ProtectedRoute>

    </Router>
  );
}

export default App;