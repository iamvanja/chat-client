import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { signupRequest } from './actions';

class Signup extends Component {
    render() {
        return (
            <div className="signup">
                <form>
                    <label htmlFor="email">E-mail</label>
                    <Field
                        name="email"
                        type="text"
                        id="email"
                        className="email"
                        placeholder="E-mail"
                        component="input"
                    />

                    <label htmlFor="password">Password</label>
                    <Field
                        name="password"
                        type="password"
                        id="password"
                        className="password"
                        placeholder="Password"
                        component="input"
                    />

                    <button action="submit" className="button expanded">SIGNUP</button>
                </form>
            </div>
        )
    }
}

// get the piece of state we need
const mapStateToProps = state => ({
    signup: state.signup,
});

// connect the component to redux and attach the `signup` piece of
// state to our `props` in the component. Also attach the `signupRequest`
// action to our `props` as well
const connected = connect(mapStateToProps, { signupRequest })(Signup);

// connect our connected component to Redux Form. It will
// namespace the form we use in this component as `signup`
const formed = reduxForm({
    form: 'signup',
})(connected);

// todo: export the non-connected component for unit testing

// Export our well formed component
export default formed;
