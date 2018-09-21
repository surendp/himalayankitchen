import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/homePageContent.css';

import Buttons from './Buttons.jsx';

import AboutUs from './aboutUs.jsx';
import HomeDelivery from './homeDelivery.jsx';
import Info from './info.jsx';
import Location from './location.jsx';



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
