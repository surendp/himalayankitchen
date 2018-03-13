import React from 'react';

import ContentDiv from '../../content/contentDiv.jsx';

import MondayLunch from './mondayLunch.jsx';
import TuesdayLunch from './tuesdayLunch.jsx';
import WednesdayLunch from './wednesdayLunch.jsx';
import ThursdayLunch from './thursdayLunch.jsx';
import FridayLunch from './fridayLunch.jsx';
import SaturdayLunch from './saturdayLunch.jsx';


// array of week days lunch list components
const weekDays = [<MondayLunch /> ,<TuesdayLunch />,<WednesdayLunch />,<ThursdayLunch />,<FridayLunch />,
                  <MondayLunch /> ,<TuesdayLunch />,<WednesdayLunch />,<ThursdayLunch />,<FridayLunch />];

  /*
  * Create list of lunch Components
  * Render the created lunch list
  */
  class WeekListLunch extends React.Component{


    // create list to display
    createLunchList(){
      let date = new Date();
      let day = date.getDay();

      // return the lunch list
      return this.getList(day);
    }

    // get the list starting from today cronologically
    getList(day){
        if(day < 6){
          return weekDays.slice(day-1, (day+5)-1);
        }

        return weekDays.slice(0,5);
    }

    // return the list of components from array
    renderList(){
      let lunch = this.createLunchList();
      return(
        // convert array into list
        lunch.map((lunchList, index) => {
          return <li key = {index}>{lunchList}</li>
        })
      )
    }

    render(){
      return(
        <div>
          <ul>
            {this.renderList()}
          </ul>
        </div>
      )
    }
}

export default WeekListLunch;
