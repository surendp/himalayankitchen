import React from 'react';
import seeMenu from '../../../media/seeMenu.png';
import ImgButtons from './ImgButtons.jsx';

class SeeMenuButton extends React.Component{

  handleClick(){
    
  }

  render(){
    return(
      <ImgButtons
        source={seeMenu}
        alternate="See Menu"
        imgBtnId = "seeMenuBtn"
        path = '/menu'
        onClick = {() => this.handleClick()}/>
    );
  }
}

export default SeeMenuButton;
