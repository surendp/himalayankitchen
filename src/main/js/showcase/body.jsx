import React from 'react';
import ReactDOM from 'react-dom';

import '../css/body.css';

import AboutUs from './home/aboutUs.jsx';
import HomeDelivery from './home/homeDelivery.jsx';
import Buttons from './home/Buttons.jsx';

import HomePageContent from './home/homePageContent.jsx';
import ReservationForm from './reservation/reservationForm.jsx';

import WeekListLunch from './lunch/weekListLunch.jsx';
import AlakartMenuList from './alakartmenu/alakartMenuList.jsx';

import {Route, Switch} from 'react-router-dom';

class Body extends React.Component{

  componentDidMount(){
    console.log("i am called");
  }

  render(){
    return (
      <div className = "body">
          <Route exact path = '/' component = {HomePageContent} />
          <Route  path = '/lunch' component = {WeekListLunch} />
          <Route  path = '/reservation' component = {ReservationForm} />
          <Route  path = '/menu' component = {AlakartMenuList} />
      </div>
    );
  }
}

export default Body;
