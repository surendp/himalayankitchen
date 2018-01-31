import React from 'react';
import orderOnline from '../../../media/orderOnline.png';
import ImgButtons from './ImgButtons.jsx';

class OrderOnlineButton extends React.Component{
  render(){
    return(
      <ImgButtons source={orderOnline} alternate="Order Online" imgBtnId = "orderOnlineBtn" />
    );
  }
}

export default OrderOnlineButton;
