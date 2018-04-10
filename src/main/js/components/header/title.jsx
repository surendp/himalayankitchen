import React from 'react';
import "../../css/title.css";
import logo from "../../../resources/static/images/logo.jpg";

import {Link} from 'react-router-dom';

class Title extends React.Component {
  render() {
    return (
      <div className="App-title">
        <Link to = '/'>
          <img src = {logo} className="App-logo" alt="logo" />
        </Link>
      </div>
    )
  }
}

export default Title;
