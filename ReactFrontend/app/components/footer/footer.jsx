import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/footer.css';
import facebookIcon from '../../media/facebookIcon.png';
import instagramIcon from '../../media/instagramIcon.png';

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
      </footer>
    );
  }
}

export default Footer;
