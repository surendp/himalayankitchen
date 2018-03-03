import React from 'react';
import LunchButton from './lunchButton.jsx';
import OrderOnlineButton from './orderOnlineButton.jsx';
import ReservationButton from './reservationButton.jsx';
import SeeMenuButton from './seeMenuButton.jsx';

import Link from 'react-router-dom';

const style={
  display: 'block',
  margin: '16% auto 20% auto'
}

class Buttons extends React.Component {
  render(){
    return(
      <div style={style}>
        <LunchButton />
        <OrderOnlineButton />
        <ReservationButton />
        <SeeMenuButton />
      </div>
    );
  }
}

export default Buttons;
