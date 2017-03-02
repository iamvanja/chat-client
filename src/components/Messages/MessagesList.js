import React from 'react';
import Message from './Message';

class MessagesList extends React.Component {
    constructor(props) {
        super(props);

        this.getMessages = this.getMessages.bind(this);
        this.renderMessages = this.renderMessages.bind(this);
        this.renderEmptyComment = this.renderEmptyComment.bind(this);
    }

    getMessages() {
        return this.props.messages || [];
    }

    renderMessages(messages) {
        return (
            messages.map(message =>
                <Message message={message} key={message.id} />
            )
        );
    }

    renderEmptyComment() {
        return (
            <div className="empty-comment">
                <small>No comments yet...</small>
            </div>
        );
    }

    render() {
        const messages = this.getMessages();
        return (
            <div className="messages">
                {messages.length ?
                    this.renderMessages(messages) :
                    this.renderEmptyComment()
                }
            </div>
        );
    }
}

export default MessagesList;
