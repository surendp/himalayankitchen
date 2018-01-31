import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/body.css';

import AboutUs from './content/aboutUs.jsx';
import Location from './content/location.jsx';
import Info from './content/info.jsx';
import HomeDelivery from './content/homeDelivery.jsx';

class Body extends React.Component{
  render(){
    return (
        <div className="styleMainBodyDiv">
            <AboutUs />
            <Location />
            <Info />
            <HomeDelivery />
        </div>
    );
  }
}

export default Body;
