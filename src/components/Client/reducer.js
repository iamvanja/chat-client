// called client instead of user because of consistency
// with the back-end strongloop.js keeps User as a default
// model and any custom model must be named differently
import { CLIENT_SET, CLIENT_UNSET } from './constants';

const initialState = {
    id: null,
    email: null,
    token: null,
};

const reducer = function clientReducer(state = initialState, action) {
    switch(action.type) {
        case CLIENT_SET:
            return {
                id: action.token.userId,
                email: action.token.user.email,
                token: action.token,
            };

        case CLIENT_UNSET:
            return Object.assign({}, initialState);

        default:
            return state;
    }
};

export default reducer;
