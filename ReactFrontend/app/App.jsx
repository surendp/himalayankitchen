const React = require('react');
const ReactDOM = require('react-dom');
import './css/app.css';

import Title from './components/header/title.jsx';
import Header from './components/header/appHeader.jsx';
import Body from './components/body/body.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="App styleBackground">
          <Header />
          <Title />
          <Body />
      </div>
    );
  }
}

export default App;
