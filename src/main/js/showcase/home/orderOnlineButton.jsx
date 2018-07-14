import React from 'react';
import orderOnline from '../../../resources/static/images/orderOnline.png';
import ImgButtons from '../../components/imgButtons.jsx';

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
