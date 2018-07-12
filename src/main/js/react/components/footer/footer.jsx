import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/footer.css';
import facebookIcon from '../../media/facebookIcon.png';
import instagramIcon from '../../media/instagramIcon.png';
import callIcon from '../../media/callIcon.png';
import mapIcon from '../../media/mapIcon.png';

import {NavLink} from 'react-router-dom';

class Footer extends React.Component{
  render(){
    return (
      <footer className="App-footer">
        <a href="https://www.facebook.com/HimalayanKitchenTurku/" target="_blank">
          <img src={facebookIcon} className="socialMediaIcon" alt="Like on Facebook" />
        </a>
        <a href="https://www.instagram.com/himalayan_kitchen_turku/?hl=en" target="_blank">
          <img src={instagramIcon} className="socialMediaIcon" alt="Follow on Instagram" />
        </a>
        <a href="tel:+358 405432055" target="_blank">
          <img src={callIcon} className="socialMediaIcon" alt="Call Us" />
        </a>
        <a href="https://goo.gl/maps/uHLGKERZp9p" target="_blank">
          <img src={mapIcon} className="socialMediaIcon" alt="Google Maps" />
        </a>

        <div className ="contents">
          Developers: <a href="https://www.linkedin.com/in/surendra-pandey-7a276a118/" target="_blank">Surendra</a>
          <a href="https://www.linkedin.com/in/lordsubro/" target="_blank"> Subodh</a>
        </div>

      </footer>
    );
  }
}

export default Footer;
