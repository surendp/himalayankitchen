import React from 'react';
import reservation from '../../../media/reservation.png';
import ImgButtons from './imgButtons.jsx';

class ReservationButton extends React.Component{

  handleClick(){

  }

  render(){
    return(
      <ImgButtons
          source={reservation}
          alternate="Reservation"
          imgBtnId = "reservationBtn"
          path = '/reservation'
          onClick = {() => this.handleClick()} />
    );
  }
}

export default ReservationButton;
