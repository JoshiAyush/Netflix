import 'normalize.css';

import React from 'react';
import { render } from 'react-dom';

import App from './app';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';

render(
    <>
        <GlobalStyles />
        <App />
    </>,
    document.getElementById('root')
);

