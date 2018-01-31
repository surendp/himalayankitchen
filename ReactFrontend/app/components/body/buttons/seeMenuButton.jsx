import React from 'react';
import seeMenu from '../../../media/seeMenu.png';
import ImgButtons from './ImgButtons.jsx';

class SeeMenuButton extends React.Component{
  render(){
    return(
      <ImgButtons source={seeMenu} alternate="See Menu" imgBtnId = "seeMenuBtn" />
    );
  }
}

export default SeeMenuButton;
