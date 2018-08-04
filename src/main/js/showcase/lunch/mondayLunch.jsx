import React from "react";
import FetchAPI from "../../components/fetchApi.jsx";

import ApiList from "../../components/api";

let api=  ApiList.lunchApi.monday;

class MondayLunch extends React.Component{

  render(){
    return(
      <FetchAPI api={api} day="Monday" />
    )
  }

}

export default MondayLunch;
