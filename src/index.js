import React from 'react';
import ReactDOM from 'react-dom';
import MessagesList from './components/MessagesList';

import './style.css';

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

ReactDOM.render(
    <MessagesList messages={messages} />,
    document.getElementById('root')
);
