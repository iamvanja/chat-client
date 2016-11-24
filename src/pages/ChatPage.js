import React from 'react';
import Header from '../components/Header/Header';
import Messages from '../components/Messages/Messages';
import ChatForm from '../components/ChatForm/ChatForm';

let messages = [
    {
      "createdBy": "vanja",
      "content": "foo",
      "createdAt": "2016-11-21T03:37:32.623Z",
      "updatedAt": "2016-11-21T03:37:32.623Z",
      "id": 2
    },
    {
      "createdBy": "jim",
      "content": "bar",
      "createdAt": "2016-11-21T03:37:45.154Z",
      "updatedAt": "2016-11-21T03:37:45.154Z",
      "id": 3
    },
    {
      "createdBy": "don",
      "content": "baz",
      "createdAt": "2016-11-21T03:39:26.171Z",
      "updatedAt": "2016-11-21T03:39:26.171Z",
      "id": 4
    },
    {
      "createdBy": "fred",
      "content": "foobar",
      "createdAt": "2016-11-21T03:39:44.968Z",
      "updatedAt": "2016-11-21T03:39:44.968Z",
      "id": 5
    }
];

class ChatPage extends React.Component {
    render() {
        return (
            <div className="page-chat">
                <Header />
                <Messages messages={messages} />
                <ChatForm />
            </div>
        )
    }
}

export default ChatPage;