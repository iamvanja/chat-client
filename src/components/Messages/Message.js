import React from 'react';

class Message extends React.Component {
    render() {
        // console.log('render message');
        const message = this.props.message;
        return (
            <div className="message">
                <p>
                    <span className="message-text datetime">{message.createdAt}</span>
                    <strong className="message-text author">{message.createdBy}</strong>
                    <span className="message-text content">{message.content}</span>
                </p>
            </div>
        );
    }
}

export default Message;
