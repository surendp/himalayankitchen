import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/body.css';

import AboutUs from './aboutUs.jsx';
import Location from './location.jsx';
import Info from './info.jsx';
import HomeDelivery from './homeDelivery.jsx';

class Body extends React.Component{
  render(){
    return (
        <div className="styleMainBodyDiv styleBackground">
            <AboutUs />
            <Location />
            <Info />
            <HomeDelivery />
        </div>
    );
  }
}

export default Body;
