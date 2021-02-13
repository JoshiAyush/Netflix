import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { Home } from "./pages/index.js";
import { Browse } from "./pages/index.js";
import { SignIn } from "./pages/index.js";
import { SignUp } from "./pages/index.js";

import { HOME } from "./constants.js"
import { BROWSE } from "./constants.js";
import { SIGN_IN } from "./constants.js"
import { SIGN_UP } from "./constants.js"

function App() {
  return (
    <Router>

      <Route exact path={HOME}>

        <Home />

      </Route>

      <Route exact path={SIGN_UP}>

        <SignUp />

      </Route>

      <Route exact path={SIGN_IN}>

        <SignIn />

      </Route>

      <Route exact path={BROWSE}>

        <Browse />

      </Route>

    </Router>
  );
}

export default App;