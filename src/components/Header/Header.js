import React from 'react';
import './Header.scss';

class Header extends React.PureComponent {
  render() {
    return (
      <div className="header">
        <h2>Chack</h2>
        <h4>/room/room-name <small>todo:room info</small></h4>
        <p>Logged in as <i>username</i></p>
      </div>
    );
  }
}

export default Header;
