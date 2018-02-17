import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/body.css';
import AboutUs from './content/aboutUS.jsx';
import HomeDelivery from './content/homeDelivery.jsx';
import Buttons from './buttons/Buttons.jsx';

import WeekListLunch from './lunch&menu/lunchcomponents/WeekListLunch.jsx';

import HomePageContent from './homePageContent.jsx';

import {Route, Switch} from 'react-router-dom';

class Body extends React.Component{
  render(){
    return (
        <Switch >
          <Route exact path = '/' component = {HomePageContent} />
          <Route path = '/orderOnline' component = {HomeDelivery} />
          <Route path = '/lunch' component = {WeekListLunch} />
          <Route path = '/reservation' component = {AboutUs} />
          <Route path = '/menu' component = {AboutUs} />
        </Switch>
    );
  }
}

export default Body;
