import React from "react";
import FetchAPI from "../../components/fetchApi.jsx";

let api = "/lunch/thursday";

class ThursdayLunch extends React.Component{

  render(){
    return(
      <FetchAPI api={api} day="Thursday"/>
    )
  }

}

export default ThursdayLunch;
