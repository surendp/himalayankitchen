import React from 'react';
import orderOnline from '../../../media/orderOnline.png';
import ImgButtons from './ImgButtons.jsx';

class OrderOnlineButton extends React.Component{

  handleClick(){
    alert("oder online button clicked!");
  }

  render(){
    return(
      <ImgButtons
          source={orderOnline}
          alternate="Order Online"
          imgBtnId = "orderOnlineBtn"
          onClick = {() => this.handleClick()} />
    );
  }
}

export default OrderOnlineButton;
