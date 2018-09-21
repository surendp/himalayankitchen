import React from 'react';
import menuIcon from '../../../resources/static/images/menu_icon.png';
import '../css/header.css';


class Header extends React.Component {

  render() {
    return (
      <header className="App-header">
        <img src={menuIcon} id="menuIcon" alt="menu"
         onClick={this.props.onClick()}/>
      </header>
    );
  }
}

export default Header;
