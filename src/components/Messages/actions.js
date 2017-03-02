import {
    MESSAGE_CREATING,
    MESSAGE_CREATE_SUCCESS,
    MESSAGE_CREATE_ERROR,
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

export const messageCreateError = function messageCreateError(error) {
    return {
        type: MESSAGE_CREATE_ERROR,
        error,
    }
};
