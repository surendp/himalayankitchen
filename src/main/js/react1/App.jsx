const React = require('react');
const ReactDOM = require('react-dom');

import {withRouter} from 'react-router-dom';

import './css/app.css';

import Title from './header/title.jsx';
import Header from './header/appHeader.jsx';
import Body from './showcase/body.jsx';
import Footer from './footer/footer.jsx';

import Menu from './navigation/Menu.jsx';
import SlideShow from './slideShow.jsx'


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

   //life cycle method
   componentDidUpdate(prevProps){

     // check if the route of the page changes
     if(this.props.location !== prevProps.location){
       // scroll to top if the route changes
       document.getElementById("app").scrollTop = 0;
     }
   }

  render() {
    return (
      <div className="App container" id = "app">
          <Menu visible={this.state.visible}/>
          <Header onClick = {() => this.handleClick}/>
          <Title />
          <Body />
          <SlideShow />
          <Footer />
      </div>
    );
  }
}

export default withRouter(App);
