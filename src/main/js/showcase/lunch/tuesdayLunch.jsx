import React from "react";
import FetchAPI from "../../components/fetchApi.jsx";

import ApiList from "../../components/api";

let api=  ApiList.lunchApi.tuesday;

class TuesdayLunch extends React.Component{

  render(){
    return(
      <FetchAPI api={api} day="Tuesday"/>
    )
  }

}

export default TuesdayLunch;
