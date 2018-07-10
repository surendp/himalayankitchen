import React from "react";
import FetchAPI from "../modelcomponents/fetchApi.jsx";

let api = "/lunch/monday";

class TuesdayLunch extends React.Component{

  render(){
    return(
      <FetchAPI api={api} day="Tuesday"/>
    )
  }

}

export default TuesdayLunch;
