import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import './MessagesList.scss';

class MessagesList extends React.Component {

    static propTypes = {
        client: PropTypes.shape({
            id: PropTypes.number.isRequired,
            token: PropTypes.object.isRequired,
        }).isRequired,
        loading: PropTypes.bool.isRequired,
        chatMessages: PropTypes.shape({
            list: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                created: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired,
                client: PropTypes.shape({
                    email: PropTypes.string.isRequired,
                })
            })).isRequired,
        }).isRequired,
        messageRequest: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);

        this.fetchMessages();
    }

    fetchMessages = () => {
        const { client, messageRequest } = this.props;

        if (client && client.token) {
            return messageRequest(client);
        }

        return false;
    }

    formatDateTime = (dateTime) => {
        const date = new Date(dateTime);
        return `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
    }

    renderSingleMessage = (message) => {
        return (
            <div className="message" key={message.id}>
                <p>
                    <strong className="message-text author">{message.client.email}</strong>
                    <small className="message-text datetime">{this.formatDateTime(message.created)}</small>
                    <span className="message-text content">{message.text}</span>
                </p>
            </div>
        );
    }

    renderStatus = (text) => {
        return (
            <h1 className="subheader text-center status-text">{text}</h1>
        );
    }

    scrollToBottom = () => {
        const node = ReactDOM.findDOMNode(this.messagesEnd);
        node.scrollIntoView({behavior: "smooth"});
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        const {
            loading,
            chatMessages: {
                list
            },
        } = this.props;
        return (
            <div className="messages-list">
                {!loading && (list.length ?
                    list.map(message => {
                        return this.renderSingleMessage(message);
                    }) :
                    this.renderStatus('No comments yet...'))
                }

                {loading && (
                    this.renderStatus('Loading messages...')
                )}

                <button className="button" onClick={this.fetchMessages}>Refetch Messages!</button>

                <div ref={(el) => { this.messagesEnd = el; }}></div>
            </div>
        );
    }
}

export default MessagesList;
