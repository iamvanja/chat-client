import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';

const initialState = {
    requesting: false,
    successful: false,
    messages: [],
    errors: [],
};

const reducer = function loginReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_REQUESTING:
            return Object.assign({}, initialState, {
                requesting: true,
                messages: [{
                    body: 'Logging in....',
                    time: new Date(),
                }],
            });

        case LOGIN_SUCCESS:
            return Object.assign({}, initialState, {
                successful: true,
            });

        case LOGIN_ERROR:
            return Object.assign({}, initialState, {
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
