import React from 'react';
import Header from '../Header/Header';

import io from 'socket.io-client';
const socket = io(process.env.REACT_APP_API_URL);

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                {React.cloneElement(this.props.children, { socket: socket })}
            </div>
        )
    }
}

export default App;
