import React from "react";
import FetchAPI from "../modelcomponents/fetchApi.jsx";

let api = "/lunch/monday";

class MondayLunch extends React.Component{

  render(){
    return(
      <FetchAPI api={api} day="Monday" />
    )
  }

}

export default MondayLunch;
