import React from 'react';
import seeMenu from '../../../media/seeMenu.png';
import ImgButtons from './ImgButtons.jsx';

class SeeMenuButton extends React.Component{

  handleClick(){
    alert("See Menu Button clicked!");
  }

  render(){
    return(
      <ImgButtons
        source={seeMenu}
        alternate="See Menu"
        imgBtnId = "seeMenuBtn"
        onClick = {() => this.handleClick()}/>
    );
  }
}

export default SeeMenuButton;
