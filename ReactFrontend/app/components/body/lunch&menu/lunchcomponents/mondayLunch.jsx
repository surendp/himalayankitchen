import React from "react";
import FetchAPI from "../modelcomponents/fetchApi.jsx";

let api = "http://localhost:8080/lunch/monday";

class MondayLunch extends React.Component{
  render(){
    return(
      <FetchAPI api={api} />
    )
  }
}

export default MondayLunch;
