import React from 'react';
import lunch from '../../media/lunch.png';
import orderOnline from '../../media/orderOnline.png';
import reservation from '../../media/reservation.png';
import seeMenu from '../../media/seeMenu.png';
import '../../css/imgButtons.css';

class ImgButtons extends React.Component{
    render(){
        return (
            <div className="container">
              <img src={lunch} className="imgButtons" id="lunch" alt="Lunch Served" />
              <img src={orderOnline} className="imgButtons" id="orderOnline" alt="Order Online" />
                <img src={reservation} className="imgButtons" id="reservation" alt="Reserve a Table" />
                <img src={seeMenu} className="imgButtons" id="seeMenu" alt="See Menu" />
            </div>
        );
    }
}

export default ImgButtons;
