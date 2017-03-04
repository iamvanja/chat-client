export function emailValidate(value) {
    if ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))) {
        return 'Invalid email address';
    }
    return;
}

export function requiredValidate(value) {
    return value ? undefined : 'Required';
}
