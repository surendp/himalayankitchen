import React from 'react';
import LunchButton from './lunchButton.jsx';
import OrderOnlineButton from './orderOnlineButton.jsx';
import ReservationButton from './reservationButton.jsx';
import SeeMenuButton from './seeMenuButton.jsx';

import Link from 'react-router-dom';


class Buttons extends React.Component {
  render(){
    return(
      <div>
        <LunchButton />
        <OrderOnlineButton />
        <ReservationButton />
        <SeeMenuButton />
      </div>
    );
  }
}

export default Buttons;
