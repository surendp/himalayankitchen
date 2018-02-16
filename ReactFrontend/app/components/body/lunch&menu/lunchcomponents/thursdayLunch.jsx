import React from "react";
import FetchAPI from "../modelcomponents/fetchApi.jsx";

let api = "http://localhost:8080/lunch/monday";

class ThursdayLunch extends React.Component{

  render(){
    return(
      <FetchAPI api={api} day="Thursday"/>
    )
  }

}

export default ThursdayLunch;
