import React from 'react';
import reservation from '../../../media/reservation.png';
import ImgButtons from './ImgButtons.jsx';

class ReservationButton extends React.Component{

  handleClick(){
    alert("Reservation button clicked!");
  }

  render(){
    return(
      <ImgButtons
          source={reservation}
          alternate="Reservation"
          imgBtnId = "reservationBtn"
          onClick = {() => this.handleClick()} />
    );
  }
}

export default ReservationButton;
