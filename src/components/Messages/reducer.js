import {
    MESSAGE_CREATING,
    MESSAGE_CREATE_SUCCESS,
    MESSAGE_CREATE_ERROR,
    MESSAGE_REQUESTING,
    MESSAGE_REQUEST_SUCCESS,
    MESSAGE_REQUEST_ERROR,
} from './constants';

const initialState = {
    list: [],
    requesting: false,
    successful: false,
    messages: [],
    errors: [],
};

const reducer = function messageReducer(state = initialState, action) {
    switch (action.type) {
        case MESSAGE_CREATING:
            return Object.assign({}, state, initialState, {
                list: state.list,
                requesting: true,
                messages: [{
                    body: `Message '${action.message.text}' is being created...`,
                    time: new Date(),
                }],
                errors: [],
            });

        // on success include the new message into our message list
        case MESSAGE_CREATE_SUCCESS:
            return Object.assign({}, initialState, {
                list: [...state.list, action.message],
                successful: true,
                messages: [{
                    body: `Message '${action.message.text}' created!`,
                    time: new Date(),
                }],
            });

        case MESSAGE_CREATE_ERROR:
            return Object.assign({}, state, initialState, {
                errors: state.errors.concat([{
                    body: action.error.toString(),
                    time: new Date(),
                }])
            });

        case MESSAGE_REQUESTING:
            return Object.assign({}, state, initialState, {
                requesting: true,
                messages: [{
                    body: 'Fetching messages...',
                    time: new Date(),
                }],
            });

        case MESSAGE_REQUEST_SUCCESS:
            return Object.assign({}, state, initialState, {
                list: action.messages,
                successful: true,
                messages: [{
                    body: 'Messages fetched!',
                    time: new Date(),
                }],
            });

        case MESSAGE_REQUEST_ERROR:
            return Object.assign({}, state, initialState, {
                errors: state.errors.concat([{
                    body: action.error.toString(),
                    time: new Date(),
                }])
            });

        default:
            return state;
    }
};

export default reducer;
