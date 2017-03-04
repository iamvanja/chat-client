import React, { PropTypes } from 'react';
// todo: clean-up
const InputError = (props) => {
    const {
        input,
        type,
        id,
        placeholder,
        className,
        disabled,
        refName,
        meta: {
            touched,
            error
        },
        label
    } = props;
    let isError = touched && error;
    let renderInput = () => {
        return (
            <input
                {...input}
                placeholder={placeholder}
                disabled={disabled}
                type={type}
                id={id}
                name={input.name}
                ref={refName}
                className={`${className} ${isError ? 'is-invalid-input' : ''}`}
            />
        );
    }
    let renderError = () => {
        return (
            <span className={`form-error ${isError ? 'is-visible' : ''}`}>
                {error}
            </span>
        )
    }
    return (
        <div>
            {label ? (
                <label className={ isError ? 'is-invalid-label' : '' }>{label}
                    {renderInput()}
                    {renderError()}
                </label>
            ) : (
                <div>
                    {renderInput()}
                    {renderError()}
                </div>
            )}
        </div>
    );
}

InputError.propTypes = {
    input: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    meta: PropTypes.shape({
        touched: PropTypes.bool,
        error: PropTypes.string,
    }),
    label: PropTypes.string,
}

export default InputError;
