import React from "react";
import FetchAPI from "../../components/fetchApi.jsx";

let api = "/lunch/wednesday";

class WednesdayLunch extends React.Component{

  render(){
    return(
      <FetchAPI api={api} day="Wednesday"/>
    )
  }

}

export default WednesdayLunch;
