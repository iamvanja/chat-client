import React, { Component } from 'react';
import Signup from '../components/Signup/Signup';

class SignupPage extends Component {
    render() {
        return (
            <div className="page-signup">
                <div className="text-center">
                    <h1>Signup</h1>
                </div>

                <div className="small-12 medium-6 medium-centered large-4 columns">
                    <Signup />
                </div>
            </div>
        );
    }
}

export default SignupPage;
