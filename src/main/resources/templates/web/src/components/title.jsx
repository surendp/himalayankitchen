import React from 'react';
import logo from '../media/logo.jpg';
import '../styles/title.css';

class Title extends React.Component {
  render() {
    return (
      <div className="App-title">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}

export default Title;
