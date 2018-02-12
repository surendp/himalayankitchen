const React = require('react');
const ReactDOM = require('react-dom');
import './css/app.css';

import Title from './components/header/title.jsx';
import Header from './components/header/appHeader.jsx';
import Body from './components/body/body.jsx';
import Footer from './components/footer/footer.jsx';
import Menu from './components/body/Menu.jsx';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      visible:false,
    };

    this.handleClick = this.handleClick.bind(this);
  }


   handleClick(){
     this.setState({visible: true});
   }

  render() {
    return (
      <div className="App styleBackground">
          <Menu visible={this.state.visible}/>
          <Header onClick = {() => this.handleClick}/>
          <Title />
          <Body />
          <Footer />
      </div>
    );
  }
}

export default App;
