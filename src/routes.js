import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App/App';
import WelcomePage from './pages/WelcomePage';
import ChatPage from './pages/ChatPage';
import NotFoundPage from './pages/NotFoundPage';

const Routes = (
    <Route path="/" component={App}>
        <IndexRoute component={WelcomePage} />
        <Route path="/chat" component={ChatPage} />
        <Route path="*" component={NotFoundPage} />
    </Route>
);

export default Routes;
