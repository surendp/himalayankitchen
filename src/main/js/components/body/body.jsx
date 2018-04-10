import React from 'react';
import ReactDOM from 'react-dom';

import '../../css/body.css';

import AboutUs from './content/aboutUs.jsx';
import HomeDelivery from './content/homeDelivery.jsx';
import Buttons from './buttons/Buttons.jsx';

import HomePageContent from './homePageContent.jsx';
import ReservationForm from './reservationForm/reservationForm.jsx';

import WeekListLunch from './lunch&menu/lunchcomponents/weekListLunch.jsx';
import AlakartMenuList from './lunch&menu/menucomponents/alakartMenuList.jsx';

import {Route, Switch} from 'react-router-dom';

class Body extends React.Component{

  componentDidMount(){
    console.log("i am called");
  }

  render(){
    return (
      <div>
          <Route exact path = '/' component = {HomePageContent} />
          <Route  path = '/lunch' component = {WeekListLunch} />
          <Route  path = '/reservation' component = {ReservationForm} />
          <Route  path = '/menu' component = {AlakartMenuList} />
      </div>
    );
  }
}

export default Body;
