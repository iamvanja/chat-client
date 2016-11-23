import React from 'react';

class Message extends React.Component {
    formatDateTime(dateTime) {
        const date = new Date(dateTime);
        return `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
    }

    render() {
        // console.log('render message');
        const message = this.props.message;
        return (
            <div className="message">
                <p>
                    <strong className="message-text author">{message.createdBy}</strong>
                    <small className="message-text datetime">{this.formatDateTime(message.createdAt)}</small>
                    <span className="message-text content">{message.content}</span>
                </p>
            </div>
        );
    }
}

export default Message;
