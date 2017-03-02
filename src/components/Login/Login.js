import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// import form helpers
import FormMessages from '../FormHelpers/FormMessages';
import FormErrors from '../FormHelpers/FormErrors';

import { loginRequest } from './actions';

class Login extends Component {
    // pass the correct proptypes in for validation
    static propTypes = {
        handleSubmit: PropTypes.func,
        loginRequest: PropTypes.func,
        login: PropTypes.shape({
            requesting: PropTypes.bool,
            successful: PropTypes.bool,
            messages: PropTypes.array,
            errors: PropTypes.array,
        }),
    }

    // Redux Form will call this function the value of our Form fields
    // when the form is submitted
    submit = (values) => {
        this.props.loginRequest(values);
    }


    render() {
        const {
            handleSubmit,
            login: {
                requesting,
                successful,
                messages,
                errors,
            },
        } = this.props;

        return (
            <div className="login">
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

                    <button action="submit" className="button expanded">LOGIN</button>
                </form>
                <div className="auth-messages">
                    {!requesting && !!errors.length && (
                        <FormErrors message="Failure to login due to:" errors={errors} />
                    )}
                    {!requesting && !!messages.length && (
                        <FormMessages messages={messages} />
                    )}
                    {requesting && (
                        <div className="callout">
                            Logging in...
                        </div>
                    )}
                    {!requesting && !successful && (
                        <Link to="/signup">Need to signup? Click here</Link>
                    )}
                </div>
            </div>
        )
    }
}

// get the piece of state we need
const mapStateToProps = state => ({
    login: state.login,
});

// connect the component to redux and attach the `login` piece of
// state to our `props` in the component. Also attach the `loginRequest`
// action to our `props` as well
const connected = connect(mapStateToProps, { loginRequest })(Login);

// connect our connected component to Redux Form. It will
// namespace the form we use in this component as `login`
const formed = reduxForm({
    form: 'login',
})(connected);

// todo: export the non-connected component for unit testing

// Export our well formed component
export default formed;
