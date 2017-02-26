import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/App';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
import NotFoundPage from './pages/NotFoundPage';

import { checkIndexAuthorization, checkChatAuthorization } from './lib/check-auth';

const getRoutes = function(store) {
    return (
        <Route path="/" component={App}>
            <IndexRoute onEnter={checkIndexAuthorization(store)} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/chat" component={ChatPage} onEnter={checkChatAuthorization(store)} />
            <Route path="*" component={NotFoundPage} />
        </Route>
    );
}

export default getRoutes;
