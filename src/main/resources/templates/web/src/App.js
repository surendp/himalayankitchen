import React, { Component } from 'react';
import './App.css';
import Header from './components/appHeader.jsx';
import Title from './components/title.jsx';
import Body from './components/appBody.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />;
        <Title />;
        <Body />;
      </div>
    );
  }
}

export default App;
