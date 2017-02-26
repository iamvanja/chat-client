import { SIGNUP_REQUESTING } from './constants';

const initialState = {
    requesting: false,
    successful: false,
    messages: [],
    errors: [],
};

const reducer = function signupReducer(state = initialState, action) {
    switch(action.type) {
        case SIGNUP_REQUESTING:
            return Object.assign({}, initialState, {
                requesting: true,
                messages: [{ body: 'Signing up...', time: new Date() }],
            });

        default:
            return state;
    }
};

export default reducer;

