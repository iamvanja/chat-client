import React from 'react';
import './ChatForm.scss';

class ChatForm extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        alert(this.refs.newMessage.value);
        // @todo: update messages
        this.refs.chatForm.reset();
    }

    render() {
        return (
            <form className="chat-form" onSubmit={this.onSubmit} ref="chatForm">
                <input type="text" placeholder="Say something" ref="newMessage" />
                <button type="submit" className="submit-button">POST</button>
            </form>
        );
    }
}

export default ChatForm;
