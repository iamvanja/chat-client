import React from 'react';
import './Header.scss';

class Header extends React.PureComponent {
  render() {
    return (
      <div className="header">
        <h2>Chat</h2>
        <h3>/room/room-name</h3>
        <p>Logged in as <i>username</i></p>
      </div>
    );
  }
}

export default Header;
