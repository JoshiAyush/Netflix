import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Browse, Home, SignIn, SignUp } from './pages.js';

import * as ROUTES from './constants.js';


export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <SignUp />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <SignIn />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
    </Router>
  );
}

