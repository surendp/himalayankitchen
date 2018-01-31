import React from 'react';
import lunch from '../../../media/lunch.png';
import ImgButtons from './ImgButtons.jsx';

class LunchButton extends React.Component{
  render(){
    return(
      <ImgButtons source={lunch} alternate="Lunch" imgBtnId = "lunchBtn" />
    );
  }
}

export default LunchButton;
