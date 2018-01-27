const React = require('react');
const ReactDOM = require('react-dom');
import './css/app.css';

import Title from './components/header/title.jsx';
import Header from './components/header/appHeader.jsx';
import Body from './components/body/body.jsx';
import Footer from './components/footer/footer.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Title />
          <Body />
          <Footer />
      </div>
    );
  }
}

export default App;
