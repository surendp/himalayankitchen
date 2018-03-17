const React = require('react');
const ReactDOM = require('react-dom');

import {Route} from 'react-router-dom';

import '../../../css/menu.css';
import NavItem from './navItem.jsx';
import NestedNavLinkForMenu from './nestedNavLinkForMenu.jsx';

class Menu extends React.Component {
  render() {
    return (
      <div className={"menu" + (this.props.visible ? "visible" : "invisible")}>
          <NavItem title="Home" path="/" />
          <NavItem title="Lunch" path="/lunch" />
          <NavItem title="Order Online" path="/orderOnline" />
          <NavItem title="Menu" path="/menu" />

          <Route path = "/menu" component = {NestedNavLinkForMenu} />
      </div>
    );
  }
}

export default Menu;
