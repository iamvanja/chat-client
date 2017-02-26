import { SIGNUP_REQUESTING, SIGNUP_SUCCESS, SIGNUP_ERROR } from './constants';

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
                messages: [{
                    body: 'Signing up...',
                    time: new Date(),
                }],
            });

        // reset the state and add a body message of success!
        case SIGNUP_SUCCESS:
            return Object.assign({}, initialState, {
                successful: true,
                messages: [{
                    body: `Successfully created account for ${action.response.email}`,
                    time: new Date(),
                }]
            });

        // reset the state but with errors
        case SIGNUP_ERROR:
            return Object.assign({}, initialState, {
                successful: false,
                errors: state.errors.concat([{
                    body: action.error.toString(),
                    time: new Date(),
                }]),
            });

        default:
            return state;
    }
};

export default reducer;

