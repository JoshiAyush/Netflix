import 'normalize.css';

import React from 'react';
import { render } from 'react-dom';

import App from './app';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';

import { FirebaseStateProvider } from "./context/StateProvider.js";

render(

    <React.Fragment>

        <FirebaseStateProvider value={{ firebase }}>

            <GlobalStyles />

            <App />

        </FirebaseStateProvider>

    </React.Fragment>,

    document.getElementById('root')
);

