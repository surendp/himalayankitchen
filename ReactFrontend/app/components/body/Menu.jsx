const React = require('react');
const ReactDOM = require('react-dom');
import '../../css/menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
  }

  getInitialState(){
    return {
      visible:false
    };
  }

  show(){
    this.setState({visible: true });
    document.addEventListener("click", this.hide.bind(this));
  }

  hide(){
    document.removeEventListener("click", this.hide.bind(this));
    this.setState({visible: false });
  }

  render() {
    return (
      <div className={"menu" + (this.state.visible ? "visible" : "invisible")}>
          <h3>Fireflies</h3>
          <h3>Aint it Fun</h3>
          <h3>Ready or Not</h3>
          <h3>Cecelia</h3>
      </div>
    );
  }
}

export default Menu;
