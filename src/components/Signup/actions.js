import { SIGNUP_REQUESTING } from './constants';

export function signupRequest({ email, password }) {
    return {
        type: SIGNUP_REQUESTING,
        email,
        password,
    }
};
