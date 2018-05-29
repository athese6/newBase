import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import {Provider as ReduxProvider} from 'react-redux'

import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
// import registerServiceWorker from './registerServiceWorker';

const store = configureStore(window.__REDUX_STATE__ || {});

const AppBundle = (
    <ReduxProvider store={store}>
        <App/>
    </ReduxProvider>
);

window.onload = () => {
    Loadable.preloadReady().then(() => {
        // ReactDOM.hydrate(  this is for ssr
        ReactDOM.render(
            AppBundle,
            document.getElementById('root')
        );
    });
};

// registerServiceWorker();
