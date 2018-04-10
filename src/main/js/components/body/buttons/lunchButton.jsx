import React from 'react';
import lunch from '../../../../resources/static/images/lunch.png';
import ImgButtons from './imgButtons.jsx';

class LunchButton extends React.Component{

  handleClick(){

  }

  render(){
    return(
      <ImgButtons
        source={lunch}
        alternate="Lunch"
        path = '/lunch'
        imgBtnId = "lunchBtn"
        onClick = {() => this.handleClick()}/>
    );
  }
}

export default LunchButton;
