import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

// import all routes
import getRoutes from './routes';

// import index scss
import './scss/index';

// import the index reducer and sagas
import IndexReducer from './index-reducer';
import IndexSagas from './index-sagas';

// setup the middleware to watch between the reducers and the actions
const sagaMiddleware = createSagaMiddleware();

const composeSetup = process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

// setup redux store with Sagas
const store = createStore(
    IndexReducer,
    composeSetup(applyMiddleware(sagaMiddleware)), // allows redux devtools to watch sagas
);

// Begin our Index Saga
sagaMiddleware.run(IndexSagas);

// Setup the top level router component for our React Router
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {getRoutes(store)}
        </Router>
    </Provider>,
    document.getElementById('root')
);
