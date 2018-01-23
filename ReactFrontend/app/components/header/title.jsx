import React from 'react';
import "../../css/title.css";
import logo from "../../media/logo.jpg";

class Title extends React.Component {
  render() {
    return (
      <div className="App-title">
        <img src = {logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}

export default Title;
