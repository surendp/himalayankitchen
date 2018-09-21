import React from "react";
import FetchAPI from "../../components/fetchApi.jsx";

import ApiList from "../../components/api";

let api=  ApiList.lunchApi.thursday;


class ThursdayLunch extends React.Component{

  render(){
    return(
      <FetchAPI api={api} day="Thursday"/>
    )
  }

}

export default ThursdayLunch;
