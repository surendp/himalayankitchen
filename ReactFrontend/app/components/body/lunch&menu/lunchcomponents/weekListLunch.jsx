import React from 'react';

import ContentDiv from '../../content/contentDiv.jsx';

import MondayLunch from './mondayLunch.jsx';
import TuesdayLunch from './tuesdayLunch.jsx';
import WednesdayLunch from './wednesdayLunch.jsx';
import ThursdayLunch from './thursdayLunch.jsx';
import FridayLunch from './fridayLunch.jsx';
import SaturdayLunch from './saturdayLunch.jsx';


class WeekListLunch extends React.Component{

  renderList(){
    return(
      <div>
        <MondayLunch />
        <TuesdayLunch />
        <WednesdayLunch />
        <ThursdayLunch />
        <FridayLunch />
        <SaturdayLunch />
      </div>
    )
  }

  render(){
    return(
      this.renderList()
    )
  }
}

export default WeekListLunch;
