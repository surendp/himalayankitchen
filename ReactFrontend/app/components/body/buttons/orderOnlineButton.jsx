import React from 'react';
import orderOnline from '../../../media/orderOnline.png';
import ImgButtons from './ImgButtons.jsx';

class OrderOnlineButton extends React.Component{

  handleClick(){
    window.open('https://www.foodora.fi/en/restaurant/s2mj/himalayan-kitchen-vendor?r=1','_blank');
  }

  render(){
    return(
          <ImgButtons
              source={orderOnline}
              alternate="Order Online"
              imgBtnId = "orderOnlineBtn"
              path = '/'
              onClick = {() => this.handleClick()} />
    );
  }
}

export default OrderOnlineButton;
