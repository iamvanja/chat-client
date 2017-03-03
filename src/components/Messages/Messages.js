import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import './Messages.scss';

import MessageForm from './MessageForm';
import MessagesList from './MessagesList';

import FormErrors from '../FormHelpers/FormErrors';

import { messageCreate, messageRequest } from './actions';

class Messages extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        client: PropTypes.shape({
            id: PropTypes.number.isRequired,
            token: PropTypes.object.isRequired,
        }).isRequired,
        chatMessages: PropTypes.shape({
            list: PropTypes.array,
            posting: PropTypes.bool,
            requesting: PropTypes.bool,
            successful: PropTypes.bool,
            messages: PropTypes.array,
            errors: PropTypes.array,
        }).isRequired,
        messageCreate: PropTypes.func.isRequired,
        messageRequest: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired,
    }

    render() {
        const {
            chatMessages: {
                posting,
                requesting,
                errors
            },
        } = this.props;

        return (
            <div className="messages">
                <MessagesList
                    {...this.props}
                    loading={requesting}
                />
                <MessageForm
                    {...this.props}
                    loading={posting}
                />

                {!posting && !requesting && !!errors.length && (
                    <div className="error-messages">
                        <FormErrors errors={errors} />
                    </div>
                )}
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
const connected = connect(mapStateToProps, { messageCreate, messageRequest })(Messages);
const formed = reduxForm({
    form: 'chatMessages',
})(connected);

export default formed;
