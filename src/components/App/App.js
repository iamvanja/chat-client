import React from 'react';
import Header from '../Header/Header';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                {this.props.children}
            </div>
        )
    }
}

export default App;
