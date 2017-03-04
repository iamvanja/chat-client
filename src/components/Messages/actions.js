import {
    MESSAGE_CREATING,
    MESSAGE_CREATE_SUCCESS,
    MESSAGE_CREATE_ERROR,
    MESSAGE_REQUESTING,
    MESSAGE_REQUEST_SUCCESS,
    MESSAGE_REQUEST_ERROR,
    MESSAGE_RECEIVE_WS,
} from './constants';

export const messageCreate = function messageCreate(client, message) {
    return {
        type: MESSAGE_CREATING,
        client,
        message,
    }
};

export const messageCreateSuccess = function messageCreateSuccess(message) {
    return {
        type: MESSAGE_CREATE_SUCCESS,
        message,
    }
};

export const messageReceiveWs = function messageReceiveWs(message) {
    return {
        type: MESSAGE_RECEIVE_WS,
        message,
    }
};

export const messageCreateError = function messageCreateError(error) {
    return {
        type: MESSAGE_CREATE_ERROR,
        error,
    }
};

export const messageRequest = function messageRequest(client) {
    return {
        type: MESSAGE_REQUESTING,
        client,
    }
};

export const messageRequestSuccess = function messageRequestSuccess(messages) {
    return {
        type: MESSAGE_REQUEST_SUCCESS,
        messages,
    }
};

export const messageRequestError = function messageRequestError(error) {
    return {
        type: MESSAGE_REQUEST_ERROR,
        error,
    }
};
