import React from 'react';
import seeMenu from '../../../../resources/static/images/seeMenu.png';
import ImgButtons from '../../components/imgButtons.jsx';

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
