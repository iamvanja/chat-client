import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// import form helpers
import FormMessages from '../FormHelpers/FormMessages';
import FormErrors from '../FormHelpers/FormErrors';

import { signupRequest } from './actions';

class Signup extends Component {
    // pass the correct proptypes in for validation
    static propTypes = {
        handleSubmit: PropTypes.func,
        signupRequest: PropTypes.func,
        signup: PropTypes.shape({
            requesting: PropTypes.bool,
            successful: PropTypes.bool,
            messages: PropTypes.array,
            errors: PropTypes.array,
        }),
    }

    // Redux Form will call this function the value of our Form fields
    // when the form is submitted
    submit = (values) => {
        this.props.signupRequest(values);
    }

    render() {
        const {
            handleSubmit,
            signup: {
                requesting,
                successful,
                messages,
                errors,
            },
        } = this.props;

        return (
            <div className="signup">
                {/* Use this Submit handler with our own submit handler */}
                <form onSubmit={handleSubmit(this.submit)}>
                    <label htmlFor="email">E-mail</label>
                    <Field
                        name="email"
                        type="email"
                        id="email"
                        className="email"
                        placeholder="E-mail"
                        component="input"
                        required="required"
                    />

                    <label htmlFor="password">Password</label>
                    <Field
                        name="password"
                        type="password"
                        id="password"
                        className="password"
                        placeholder="Password"
                        component="input"
                        required="required"
                    />

                    <button action="submit" className="button expanded">SIGNUP</button>
                </form>
                <div className="auth-messages">
                    {!requesting && !!errors.length && (
                        <FormErrors message="Failure to signup due to:" errors={errors} />
                    )}
                    {!requesting && !!messages.length && (
                        <FormMessages messages={messages} />
                    )}
                    {!requesting && successful && (
                        <div className="callout success">
                            Signup successful! <Link to="/login">Click here to login</Link>
                        </div>
                    )}
                    {!requesting && !successful && (
                        <Link to="/login">Already a member? Login here</Link>
                    )}
                </div>
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
