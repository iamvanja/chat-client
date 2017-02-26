import { CLIENT_SET, CLIENT_UNSET } from './constants';

const initialState = {
    id: null,
    token: null,
};

const reducer = function clientReducer(state = initialState, action) {
    console.log('hello from clientReducer', action);
    switch(action.type) {
        case CLIENT_SET:
            return {
                id: action.userId,
                token: action.token,
            };

        case CLIENT_UNSET:
            return {
                id: null,
                token: null,
            };

        default:
            return state;
    }
};

export default reducer;
