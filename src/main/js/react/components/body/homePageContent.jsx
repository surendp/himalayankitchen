import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/homePageContent.css';

import Buttons from './buttons/Buttons.jsx';

import AboutUs from './content/aboutUs.jsx';
import HomeDelivery from './content/homeDelivery.jsx';
import Info from './content/info.jsx';
import Location from './content/location.jsx';
import LunchToday from './lunch&menu/lunchcomponents/lunchToday.jsx';



class HomePageContent extends React.Component{
  render(){
    return (
        <div className="homePageContent">
            <Buttons />
            <AboutUs />
            <Info />
            <HomeDelivery />
            <Location />
        </div>
    );
  }
}

export default HomePageContent;
