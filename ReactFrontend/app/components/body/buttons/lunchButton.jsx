import React from 'react';
import lunch from '../../../media/lunch.png';
import ImgButtons from './ImgButtons.jsx';

class LunchButton extends React.Component{

  handleClick(){
    alert('Lunch button clicked');
  }

  render(){
    return(
      <ImgButtons
        source={lunch}
        alternate="Lunch"
        imgBtnId = "lunchBtn"
        onClick = {() => this.handleClick()}/>
    );
  }
}

export default LunchButton;
