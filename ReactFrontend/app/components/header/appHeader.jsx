import React from 'react';
import menuIcon from '../../media/menu_icon.png';
import '../../css/header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={menuIcon} id="menuIcon" alt="menu" />
      </header>
    );
  }
}

export default Header;
