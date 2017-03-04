import { call, put, takeLatest } from 'redux-saga/effects';
import { handleApiErrors } from '../../lib/api-errors';
import { MESSAGE_CREATING, MESSAGE_REQUESTING } from './constants';

import {
    messageCreateSuccess,
    messageCreateError,
    messageRequestSuccess,
    messageRequestError,
} from './actions';

const messagesUrl = `${process.env.REACT_APP_API_URL}/api/ChatMessages`;

function handleRequest(request) {
    return request
        .then(handleApiErrors)
        .then(response => response.json())
        .then(json => json)
        .catch((error) => { throw error });
}

function messageCreateApi(client, message) {
    const request = fetch(messagesUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // passes our token as an "Authorization" header in
            // every POST request.
            Authorization: client.token.id || undefined, // will throw an error if no login
        },
        body: JSON.stringify(message),
    });

    return handleRequest(request);
}

function* messageCreateFlow(action) {
    try {
        const { client, message } = action;
        const createdMessage = yield call(messageCreateApi, client, message);
        // add client's email
        createdMessage.client = {
            email: client.email
        };
        yield put(messageCreateSuccess(createdMessage));
    }
    catch (error) {
        yield put(messageCreateError(error));
    }
}

function messageRequestApi(client) {
    const request = fetch(messagesUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: client.token.id || undefined,
            filter: JSON.stringify({
                include: {
                    relation: 'client',
                },
            }),
        },
    });

    return handleRequest(request);
}

function* messageRequestFlow(action) {
    try {
        const { client } = action;
        const messages = yield call(messageRequestApi, client);

        // dispatch the success action
        yield put(messageRequestSuccess(messages));
    }
    catch (error) {
        yield put(messageRequestError(error));
    }
}

function* messagesWatcher() {
    // each of the below RECEIVES the action from the .. action
    yield [
        takeLatest(MESSAGE_CREATING, messageCreateFlow),
        takeLatest(MESSAGE_REQUESTING, messageRequestFlow),
    ]
}

export default messagesWatcher;
