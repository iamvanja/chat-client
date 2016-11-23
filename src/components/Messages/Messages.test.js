import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';
import {expect} from 'chai';

import Messages from './Messages';

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
            <Messages messages={messages} />
        );
        const messageEls = scryRenderedDOMComponentsWithClass(component, 'message');
        const [firstMsg, secondMsg] = messageEls.map(el => el.textContent);

        expect(messageEls.length).to.equal(2);
        expect(firstMsg).to.contain('vanja');
        expect(firstMsg).to.contain('foo');
        expect(secondMsg).to.contain('jim');
        expect(secondMsg).to.contain('bar');
    });

    it('renders empy message when empty array is supplied', () => {
        const component = renderIntoDocument(
            <Messages messages={[]} />
        );
        const emptyComment = scryRenderedDOMComponentsWithClass(component, 'empty-comment');

        expect(emptyComment.length).to.equal(1);
    });

    it('renders empy message when prop is undefined', () => {
        const component = renderIntoDocument(
            <Messages messages={undefined} />
        );
        const emptyComment = scryRenderedDOMComponentsWithClass(component, 'empty-comment');

        expect(emptyComment.length).to.equal(1);
    });

});
