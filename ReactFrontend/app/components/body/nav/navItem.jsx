import React from 'react';

const navItem = {
  margin: '0.5%, 0.5%, 0.5%¤, 0.5%',
  padding: '0, 0, 0, 0',
  width:'98%',
};

export default class NavItem extends React.Component {
  render() {
    return (
      <h3 style={navItem}>{this.props.title}</h3>
    )
  }
}
