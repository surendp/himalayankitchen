import React from 'react';
import {NavLink} from 'react-router-dom';

const navItem = {
  display: 'block',
  margin: '10% 1% -7% 1%',
  textAlign: 'center',
  padding: '1% 1% 1% 1%',
  width:'95%',
  height:'auto',
  color: 'white',
  fontSize: '50px',
  fontWeight: 'bold',
  borderBottom: 'solid 3px #000000',
  textDecorationLine:'none'
  ///////////////
};

export default class NavItem extends React.Component {
  render() {
    return (
      <NavLink exact to={this.props.path}
               style={navItem}
               activeStyle={{ fontSize:'50px', color: '#ff9900', fontSize: '60px'}}>
        {this.props.title}
      </NavLink>
    )
  }
}
