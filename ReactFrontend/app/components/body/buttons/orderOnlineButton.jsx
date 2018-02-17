import React from 'react';
import orderOnline from '../../../media/orderOnline.png';
import ImgButtons from './ImgButtons.jsx';

class OrderOnlineButton extends React.Component{

  handleClick(){

  }

  render(){
    return(
          <ImgButtons
              source={orderOnline}
              alternate="Order Online"
              imgBtnId = "orderOnlineBtn"
              path = '/orderOnline'
              onClick = {() => this.handleClick()} />
    );
  }
}

export default OrderOnlineButton;
