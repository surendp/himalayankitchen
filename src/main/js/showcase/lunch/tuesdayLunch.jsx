import React from "react";
import FetchAPI from "../../components/fetchApi.jsx";

let api = "/lunch/tuesday";

class TuesdayLunch extends React.Component{

  render(){
    return(
      <FetchAPI api={api} day="Tuesday"/>
    )
  }

}

export default TuesdayLunch;
