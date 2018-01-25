<<<<<<< HEAD
import React from 'react';
=======
import React, { Component } from 'react';
>>>>>>> bf5a0546ff33faadc4191457195b94913a97dfb5
import menuIcon from '../../media/menu_icon.png';
import '../../css/header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={menuIcon} className="menuIcon" alt="menu" />
      </header>
    );
  }
}

export default Header;
