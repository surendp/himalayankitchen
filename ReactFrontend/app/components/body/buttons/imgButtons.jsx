import React from 'react';
import '../../../css/imgButtons.css';
import {Link} from "react-router-dom";

const imgButtons = {
  display: 'block',
  margin: '7% auto 7% auto',
  background: 'rgba(0, 0, 0, 0.20)',
  width: '40%'
};

// Navigation link is created in this component
// Every component rendering this component should pass 'path' prop to this component

class ImgButtons extends React.Component{
    render(){
        return (
            <div className="container">
              <Link to={this.props.path}>
                <img src={this.props.source}
                  alt={this.props.alternate}
                  id={this.props.imgBtnId}
                  style={imgButtons}
                  className="imgButtons"
                  onClick={this.props.onClick}></img>
              </Link>
            </div>
        );
    }
}

export default ImgButtons;
