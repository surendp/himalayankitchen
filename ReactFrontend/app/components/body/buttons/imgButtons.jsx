import React from 'react';
import '../../../css/imgButtons.css';

const imgButtons = {
  display: 'block',
  margin: '5% auto 5% auto',
  background: 'rgba(0, 0, 0, 0.20)',
  width: '40%'
};

class ImgButtons extends React.Component{
    render(){
        return (
            <div className="container">
              <img src={this.props.source}
                alt={this.props.alternate}
                id={this.props.imgBtnId}
                style={imgButtons}
                className="imgButtons"></img>
            </div>
        );
    }
}

export default ImgButtons;
