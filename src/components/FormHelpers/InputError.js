import React from 'react';

const InputError = (props) => {
    const {
        input,
        type,
        placeholder,
        meta: {
            touched,
            error
        },
        label
    } = props;
    let isError = touched && error;
    let rootEl = label ? 'label' : 'div';

    return (
        <rootEl className={ isError ? 'is-invalid-label' : '' }>{label}
            <input
                {...input}
                placeholder={placeholder}
                type={type}
                className={ isError ? 'is-invalid-input' : '' }
            />
            <span className={`form-error ${isError ? 'is-visible' : ''}`}>
                {error}
            </span>
        </rootEl>
    );
}

InputError.propTypes = {
    input: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    meta: PropTypes.shape({
        touched: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired,
    }),
    label: PropTypes.string,
}

export default InputError;
