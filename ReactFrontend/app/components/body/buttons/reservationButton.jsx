import React from 'react';
import reservation from '../../../media/reservation.png';
import ImgButtons from './ImgButtons.jsx';

class ReservationButton extends React.Component{
  render(){
    return(
      <ImgButtons source={reservation} alternate="Reservation" imgBtnId = "reservationBtn" />
    );
  }
}

export default ReservationButton;
