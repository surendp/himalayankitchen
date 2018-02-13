import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/body.css';
import AboutUs from './content/aboutUS.jsx';
import HomeDelivery from './content/homeDelivery.jsx';
import Buttons from './buttons/Buttons.jsx';
import FetchAPI from './lunch&menu/modelcomponents/fetchApi.jsx';
import MondayLunch from './lunch&menu/lunchcomponents/mondayLunch.jsx';

import HomePageContent from './homePageContent.jsx';

import {Route, Switch} from 'react-router-dom';

class Body extends React.Component{
  render(){
    return (
        <Switch >
          <Route exact path = '/' component = {HomePageContent} />
          <Route path = '/orderOnline' component = {HomeDelivery} />
          <Route path = '/lunch' component = {MondayLunch} />
          <Route path = '/reservation' component = {AboutUs} />
          <Route path = '/menu' component = {AboutUs} />
        </Switch>
    );
  }
}

export default Body;
