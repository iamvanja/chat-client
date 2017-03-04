import React, { Component, PropTypes } from 'react';
import { Field } from 'redux-form';
import InputError from '../FormHelpers/InputError';

import './MessageForm.scss';

const messageRequired = value => (value ? undefined : 'Message Required');

class MessageForm extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        client: PropTypes.shape({
            id: PropTypes.number.isRequired,
            token: PropTypes.object.isRequired,
        }).isRequired,
        loading: PropTypes.bool.isRequired,
        messageCreate: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.input.focus();
    }

    submit = (message) => {
        const { client, messageCreate, reset } = this.props;

        // call messageCreate action
        messageCreate(client, message);

        // reset the form upon submission
        reset();

        this.input.focus();
    }

    render() {
        const {
            handleSubmit,
            loading,
        } = this.props;

        return (
            <form autoComplete="off" className="message-form" onSubmit={handleSubmit(this.submit)}>
                <Field
                name="text"
                type="text"
                className="text"
                placeholder="Message"
                component={InputError}
                disabled={loading}
                refName={(ref) => this.input = ref}
                validate={messageRequired} />

                {loading && (
                    <span className="posting">Posting...</span>
                )}
            </form>
        );
    }
}

export default MessageForm;
