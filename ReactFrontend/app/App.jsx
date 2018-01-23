const React = require('react');
const ReactDOM = require('react-dom');
import './css/app.css';

import Title from './components/header/title.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Title />
      		<h1>Hello world!!</h1>
      </div>
    );
  }
}

export default App;
