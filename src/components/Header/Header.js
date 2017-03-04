import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './Header.scss';

import { unsetClient } from '../Client/actions';

class Header extends React.PureComponent {

    static Proptypes = {
        client: PropTypes.shape({
            id: PropTypes.number.isRequired,
            token: PropTypes.object.isRequired,
        }),
    }

    logout = () => {
        return this.props.dispatch(unsetClient());
    }

    renderAuthorized = (username) => {
        return (
            <div className="authorized-container text-right">
                <small>
                    {username} (<a className="logout" onClick={this.logout}>Logout</a>)
                </small>
            </div>
        );
    }

    render() {
        const { client: { email } } = this.props;
        return (
            <div className="header">
                <div className="header-inner-container">
                    <div className="brand-container">
                        <h2>Chack</h2>
                    </div>
                    { email && this.renderAuthorized(email) }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    client: state.client,
});

const connected = connect(mapStateToProps)(Header);

export default connected;

// export default Header;
