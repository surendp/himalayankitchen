const React = require('react');
const ReactDOM = require('react-dom');
import '../../../css/menu.css';

import NavItem from './navItem.jsx';

class Menu extends React.Component {
  render() {
    return (
      <div className={"menu" + (this.props.visible ? "visible" : "invisible")}>
          <NavItem title="Home" />
      </div>
    );
  }
}

export default Menu;
