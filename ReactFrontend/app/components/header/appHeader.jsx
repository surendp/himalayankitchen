import React from 'react';
import menuIcon from '../../media/menu_icon.png';
import '../../css/header.css';

import Menu from '../body/Menu.jsx';

class Header extends React.Component {

  handleClick(){
    alert('The Menu should open now!');
  }

  render() {
    return (
      <header className="App-header">
        <img src={menuIcon} id="menuIcon" alt="menu"
         onClick={this.handleClick}/>
      </header>
    );
  }
}

export default Header;
