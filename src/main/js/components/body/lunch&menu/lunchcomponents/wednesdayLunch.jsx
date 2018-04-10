import React from "react";
import FetchAPI from "../modelcomponents/fetchApi.jsx";

let api = "/lunch/monday";

class WednesdayLunch extends React.Component{

  render(){
    return(
      <FetchAPI api={api} day="Wednesday"/>
    )
  }

}

export default WednesdayLunch;
