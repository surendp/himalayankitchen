const React = require('react');
const ReactDOM = require('react-dom');

import {Route} from 'react-router-dom';

import '../css/menu.css';
import NavItem from './navItem.jsx';
import NestedNavLinkForMenu from './nestedNavLinkForMenu.jsx';

const externalLink = {
  display: 'block',
  textDecorationLine:'none',
  margin: '10% 1% -7% 1%',
  textAlign: 'center',
  padding: '1% 1% 1% 1%',
  width:'95%',
  height:'auto',
  color: 'white',
  fontSize: '120%',
  fontWeight: 'bold',
  borderBottom: 'solid 3px #000000',

  ///////////////
};

class Menu extends React.Component {
  render() {
    return (
      <div className={"menu" + (this.props.visible ? "visible" : "invisible")}>
          <NavItem title="Home" path="/" />
          <NavItem title="Lunch" path="/lunch" />
          <a style={externalLink} href="https://www.foodora.fi/en/restaurant/s2mj/himalayan-kitchen-vendor?r=1" target="_blank">Order Online</a>
          <NavItem title="Menu" path="/menu" />

          <Route path = "/menu" component = {NestedNavLinkForMenu} />
      </div>
    );
  }
}

export default Menu;
