import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Home } from "./pages/index.js";
import { Browse } from "./pages/index.js";
import { SignIn } from "./pages/index.js";
import { SignUp } from "./pages/index.js";
import { Profile } from "./pages/index.js";

import { HOME } from "./constants.js";
import { BROWSE } from "./constants.js";
import { SIGN_IN } from "./constants.js";
import { SIGN_UP } from "./constants.js";

import { reducer } from "./reducer.js";
import { BrowseState } from "./reducer.js";
import { SignUpState } from "./reducer.js";

import { SignUpStateProvider } from "./context/StateProvider.js";
import { BrowseStateProvider } from "./context/StateProvider.js";

import { IsUserRedirect } from "./helpers/routes.js";
import { ProtectedRoute } from "./helpers/routes.js";

import { getProfileLink } from "./utils/getProfileLink.js";

import { useAuthListener } from "./hooks/index.js";

function App() {
  const { user } = useAuthListener();

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

        <SignUpStateProvider initialState={SignUpState} reducer={reducer}>

          <SignUp />

        </SignUpStateProvider>

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

        <BrowseStateProvider initialState={BrowseState} reducer={reducer}>

          <Browse />

        </BrowseStateProvider>

      </ProtectedRoute>

      <ProtectedRoute
        exact
        user={user}
        path={getProfileLink(user)}
        signedInPath={SIGN_IN}
      >

        <Profile />

      </ProtectedRoute>

    </Router>
  );
}

export default App;