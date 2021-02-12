import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { Home } from "./constants.js";
import { Browse } from "./constants.js";
import { SignIn } from "./constants.js";
import { SignUp } from "./pages/index.js";

import { HOME } from "./constants.js"
import { BROWSE } from "./constants.js";
import { SIGN_IN } from "./constants.js"
import { SIGN_UP } from "./constants.js"


export default function App() {
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

