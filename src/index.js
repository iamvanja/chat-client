import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import socketIOClient from 'socket.io-client';
import SailsIOClient from 'sails.io.js';

import './scss/index';

//todo: {process.env.NODE_ENV !== 'production' && <DevTools />}

const io = SailsIOClient(socketIOClient);
io.sails.url = 'http://localhost:1337';
// io.sails.connect();

io.socket.on('connect', function(state) {
    console.log('connect', state);
    io.socket.get('/message', function(resData, jwres) {
        console.log(resData, jwres);
    });
});
io.socket.on('disconnect', function(){
    console.log('Lost connection to server');
});

ReactDOM.render(
    <Router children={routes} history={browserHistory} />,
    document.getElementById('root')
);
