import React from 'react';

class MessagesList extends React.Component {
    getMessages() {
        return this.props.messages || [];
    }

    render() {
        return (
            <div className="messages-list">
                {this.getMessages().map(message =>
                    <div className="message" key={message.id}>
                        <p>
                            <span className="message-text datetime">{message.createdAt}</span>
                            <strong className="message-text author">{message.createdBy}</strong>
                            <span className="message-text content">{message.content}</span>
                        </p>
                    </div>
                )}
            </div>
        );
    }
}

export default MessagesList;
