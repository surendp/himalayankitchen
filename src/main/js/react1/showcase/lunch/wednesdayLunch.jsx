import React from "react";
import FetchAPI from "../../components/fetchApi.jsx";

import ApiList from "../../components/api";

let api=  ApiList.lunchApi.wednesday;


class WednesdayLunch extends React.Component{

  render(){
    return(
      <FetchAPI api={api} day="Wednesday"/>
    )
  }

}

export default WednesdayLunch;
