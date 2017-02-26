import { LOGIN_REQUESTING } from './constants';

export function loginRequest({ email, password }) {
    return {
        type: LOGIN_REQUESTING,
        email,
        password,
    }
};
