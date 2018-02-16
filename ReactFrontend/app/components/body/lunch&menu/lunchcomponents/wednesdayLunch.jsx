import React from "react";
import FetchAPI from "../modelcomponents/fetchApi.jsx";

let api = "http://localhost:8080/lunch/monday";

class WednesdayLunch extends React.Component{

  render(){
    return(
      <FetchAPI api={api} day="Wednesday"/>
    )
  }

}

export default WednesdayLunch;
