import React, { Component } from 'react';
import Login from '../components/Login/Login';

class LoginPage extends Component {
    render() {
        return (
            <div className="page-signup">
                <div className="text-center">
                    <h1>Login</h1>
                </div>

                <div className="small-12 medium-6 medium-centered large-4 columns">
                    <Login />
                </div>
            </div>
        );
    }
}

export default LoginPage;
