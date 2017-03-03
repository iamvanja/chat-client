import React from 'react';

class MessagesList extends React.Component {
    constructor(props) {
        super(props);

        this.fetchMessages();
    }

    fetchMessages = () => {
        const { client, messageRequest } = this.props;

        if (client && client.token) {
            return messageRequest(client);
        }

        return false;
    }

    formatDateTime = (dateTime) => {
        const date = new Date(dateTime);
        return `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
    }

    renderSingleMessage = (message) => {
        return (
            <div className="message" key={message.id}>
                <p>
                    <strong className="message-text author">{message.clientId}</strong>
                    <small className="message-text datetime">{this.formatDateTime(message.created)}</small>
                    <span className="message-text content">{message.text}</span>
                </p>
            </div>
        );
    }

    renderEmptyComment = () => {
        return (
            <div className="empty-comment">
                <small>No comments yet...</small>
            </div>
        );
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
            <div className="messages">
                {/* TODO: requesting */}
                {list.length ?
                    list.map(message => {
                        return this.renderSingleMessage(message);
                    }) :
                    this.renderEmptyComment()
                }

                <button className="button" onClick={this.fetchMessages}>Refetch Messages!</button>
            </div>
        );
    }
}

export default MessagesList;
