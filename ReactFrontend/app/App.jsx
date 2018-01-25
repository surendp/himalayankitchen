const React = require('react');
const ReactDOM = require('react-dom');
import './css/app.css';
import Header from './components/header/appHeader.jsx';
import Title from './components/header/title.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Title />
      </div>
    );
  }
}

export default App;
