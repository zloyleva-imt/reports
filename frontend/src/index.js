import * as serviceWorker from './serviceWorker';

import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { App } from './components/App';

import { Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import { store,history } from './configureStore'

render(
    <Provider store={store}>
        <ConnectedRouter history={history} store={store}>
            <Router history={history}>
                <App />
            </Router>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
