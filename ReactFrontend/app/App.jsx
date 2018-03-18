const React = require('react');
const ReactDOM = require('react-dom');
import './css/app.css';

import Title from './components/header/title.jsx';
import Header from './components/header/appHeader.jsx';
import Body from './components/body/body.jsx';
import Footer from './components/footer/footer.jsx';
import Menu from './components/body/nav/Menu.jsx';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      visible:false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.hide = this.hide.bind(this);
  }

   handleClick(){
     this.setState({visible: true});
     document.addEventListener("click", this.hide);
   }

   hide(){
     document.removeEventListener("click", this.hide);
     this.setState({visible: false });
   }

  render() {
    return (
      <div className="App">
          <Menu visible={this.state.visible}/>
          <Header onClick = {() => this.handleClick}/>
          <Title />
          <Body />
            <ul className="styleBackground">
              <li><span>Burger</span></li>
              <li><span>Dish</span></li>
              <li><span>Momo</span></li>
              <li><span>Rice</span></li>
            </ul>
          <Footer />
      </div>
    );
  }
}

export default App;
