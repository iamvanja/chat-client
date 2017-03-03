import React, { PropTypes } from 'react'

// Iterate over each message object and print them
// in an unordered list
const FormMessages = (props) => {
    const { messages } = props;
    return (
        <div className="callout secondary">
            <ul className="no-bullet">
                {messages.map(message => (
                    <li key={message.time}>{message.body}</li>
                ))}
            </ul>
        </div>
    );
}

FormMessages.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            body: PropTypes.string,
            time: PropTypes.date,
        })
    ),
}

export default FormMessages;
