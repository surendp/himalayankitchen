import React from 'react';
import reservation from '../../../resources/static/images/reservation.png';
import ImgButtons from '../../components/imgButtons.jsx';

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
