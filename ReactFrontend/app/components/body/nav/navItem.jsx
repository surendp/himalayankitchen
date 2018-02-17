import React from 'react';
import {Link} from 'react-router-dom';

const navItem = {
  display: 'block',
  margin: '0.5%, 0.5%, 0.5%, 0.5%',
  textAlign: 'center',
  padding: '1, 1, 1, 1',
  width:'80%',
  height:'auto',
  color: 'white',
  fontSize: '50px',
  ///background : 'rgba(0, 0, 0, 0.90)',
};

export default class NavItem extends React.Component {
  render() {
    return (
      <Link to={this.props.path}>
        <h1 style={navItem}>{this.props.title}</h1>
      </Link>
    )
  }
}
