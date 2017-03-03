import React, { PropTypes } from 'react'

// Iterate over each error object and print them
// in an unordered list
const FormErrors = (props) => {
    const { errors } = props;
    return (
        <div className="callout alert">
            <ul className="no-bullet">
                {errors.map(errors => (
                    <li key={errors.time}>{errors.body}</li>
                ))}
            </ul>
        </div>
    );
}

FormErrors.propTypes = {
    errors: PropTypes.arrayOf(
        PropTypes.shape({
            body: PropTypes.string,
            time: PropTypes.date,
        })
    ),
}

export default FormErrors;
