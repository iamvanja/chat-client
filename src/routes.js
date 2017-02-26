import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/App';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
import NotFoundPage from './pages/NotFoundPage';

const Routes = (
    <Route path="/" component={App}>
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/chat" component={ChatPage} />
        <Route path="*" component={NotFoundPage} />
    </Route>
);

export default Routes;
