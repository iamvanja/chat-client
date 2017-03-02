import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import MessageForm from './MessageForm';
import MessagesList from './MessagesList';

import FormErrors from '../FormHelpers/FormErrors';

import { messageCreate } from './actions';

class Messages extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        client: PropTypes.shape({
            id: PropTypes.number.isRequired,
            token: PropTypes.object.isRequired,
        }),
        chatMessages: PropTypes.shape({
            list: PropTypes.array,
            requesting: PropTypes.bool,
            successful: PropTypes.bool,
            messages: PropTypes.array,
            errors: PropTypes.array,
        }).isRequired,
        messageCreate: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired,
    }

    render() {
        const {
            chatMessages: {
                list,
                requesting,
                successful,
                messages,
                errors,
            },
        } = this.props;

        return (
            <div className="messages1">
                <MessagesList {...this.props} />
                <MessageForm {...this.props} />

                <div className="form-messages">
                    {requesting && <span>Posting...</span>}
                    {!requesting && !!errors.length && (
                        <FormErrors message="Failure to post due to:" errors={errors} />
                    )}
                </div>
            </div>
        );
    }
}

// Pull in both the Client and the chatMessages state
const mapStateToProps = state => ({
    client: state.client,
    chatMessages: state.chatMessages,
})

// Make the client and chatMessages available in the props as well
// as the messageCreate function
const connected = connect(mapStateToProps, { messageCreate })(Messages);
const formed = reduxForm({
    form: 'chatMessages',
})(connected);

export default formed;
