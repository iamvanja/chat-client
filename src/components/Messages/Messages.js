import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import './Messages.scss';

import MessageForm from './MessageForm';
import MessagesList from './MessagesList';

import FormErrors from '../FormHelpers/FormErrors';

import { messageCreate, messageRequest, messageReceiveWs } from './actions';

class Messages extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        client: PropTypes.shape({
            id: PropTypes.number.isRequired,
            token: PropTypes.object.isRequired,
        }).isRequired,
        chatMessages: PropTypes.shape({
            list: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                created: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired,
                client: PropTypes.shape({
                    email: PropTypes.string.isRequired,
                })
            })).isRequired,
            posting: PropTypes.bool.isRequired,
            requesting: PropTypes.bool.isRequired,
            successful: PropTypes.bool.isRequired,
            messages: PropTypes.array.isRequired,
            errors: PropTypes.array.isRequired,
        }).isRequired,
        messageCreate: PropTypes.func.isRequired,
        messageRequest: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired,
        socket: PropTypes.object.isRequired,
    }

    componentDidMount() {
        const { socket, client, dispatch } = this.props;
        socket.on('message:new', function(message) {
            // show message for non-author users
            if (client.id !== message.clientId) {
                dispatch(messageReceiveWs(message));
            }
        });
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
