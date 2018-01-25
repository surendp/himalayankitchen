import React, { Component } from 'react';
import menuIcon from '../../media/menu_icon.png';
import '../../css/header.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={menuIcon} className="menuIcon" alt="menu" />
      </header>
    );
  }
}

export default Header;
