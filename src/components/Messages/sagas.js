import { call, put, takeLatest } from 'redux-saga/effects';
import { handleApiErrors } from '../../lib/api-errors';
import { MESSAGE_CREATING } from './constants';

import {
    messageCreateSuccess,
    messageCreateError,
} from './actions';

const messagesUrl = `${process.env.REACT_APP_API_URL}/api/Clients`;

function messageCreateApi(client, message) {
    const url = `${messagesUrl}/${client.id}/chatMessages`;
    return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // passes our token as an "Authorization" header in
          // every POST request.
          Authorization: client.token.id || undefined, // will throw an error if no login
        },
        body: JSON.stringify(message),
    })
    .then(handleApiErrors)
    .then(response => response.json())
    .then(json => json)
    .catch((error) => { throw error });
}

function* messageCreateFlow(action) {
    try {
        const { client, message } = action;
        const createdMessage = yield call(messageCreateApi, client, message);
        // creates the action with the format of
        // {
        //   type: MESSAGE_CREATE_SUCCESS,
        //   message,
        // }
        // Which we could do inline here, but again, consistency
        yield put(messageCreateSuccess(createdMessage));
    }
    catch (error) {
        // same with error
        yield put(messageCreateError(error));
    }
}

function* messagesWatcher() {
    // each of the below RECEIVES the action from the .. action
    yield [
        takeLatest(MESSAGE_CREATING, messageCreateFlow),
    ]
}

export default messagesWatcher;
