import React from 'react';
import Header from '../components/Header/Header';
import Messages from '../components/Messages/Messages';
import './ChatPage.scss';

class ChatPage extends React.Component {
    render() {
        return (
            <div className="page-chat">
                <Header />
                <Messages />
            </div>
        )
    }
}

export default ChatPage;
