import React from "react";
import FetchAPI from "../modelcomponents/fetchApi.jsx";

let api = "http://localhost:8080/lunch/monday";

class SaturdayLunch extends React.Component{

  render(){
    return(
      <FetchAPI api={api} day="Saturday"/>
    )
  }

}

export default SaturdayLunch;
