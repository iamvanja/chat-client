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
        messageCreate: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired,
    }

    submit = (message) => {
        const { client, messageCreate, reset } = this.props;

        // call messageCreate action
        messageCreate(client, message);

        // reset the form upon submission
        reset();
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form autoComplete="off" className="message-form" onSubmit={handleSubmit(this.submit)}>
                <Field
                name="text"
                type="text"
                id="text"
                className="text"
                placeholder="Message"
                component={InputError}
                validate={messageRequired} />
            </form>
        );
    }
}

export default MessageForm;
