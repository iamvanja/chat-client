import React from 'react';
import Messages from '../components/Messages/Messages';
import './ChatPage.scss';

class ChatPage extends React.Component {
    render() {
        return (
            <div className="page page-chat">
                <Messages socket={this.props.socket} />
            </div>
        )
    }
}

export default ChatPage;
