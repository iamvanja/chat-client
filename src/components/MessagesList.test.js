import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';
import {expect} from 'chai';

import MessagesList from './MessagesList';

const messages = [
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
];

describe('Messages', () => {

    it('renders messages', () => {
        const component = renderIntoDocument(
            <MessagesList messages={messages} />
        );
        const messageEls = scryRenderedDOMComponentsWithClass(component, 'message');
        const [firstMsg, secondMsg] = messageEls.map(el => el.textContent);
        console.log(firstMsg, secondMsg);

        expect(messageEls.length).to.equal(2);
        expect(firstMsg).to.contain('vanja');
        expect(firstMsg).to.contain('foo');
        expect(secondMsg).to.contain('jim');
        expect(secondMsg).to.contain('bar');
    });

});
