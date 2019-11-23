import { createStore, applyMiddleware,compose } from 'redux';

import { routerMiddleware } from 'react-router-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk';

import reducer from './reducers'
import {createBrowserHistory} from "history";

function configureStore(history) {
    const middleware = routerMiddleware(history);
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        reducer(),
        composeEnhancers(
            applyMiddleware(middleware,logger,thunk)
        )
    );

    return store;
}

export const history = createBrowserHistory();
export const store = configureStore(history);