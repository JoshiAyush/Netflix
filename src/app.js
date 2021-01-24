import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Browse, Home, SignIn, SignUp } from './pages.js';

import { HOME, SIGN_IN, SIGN_UP, BROWSE } from './constants.js';


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

