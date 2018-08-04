import React from "react";
import FetchAPI from "../../components/fetchApi.jsx";

import ApiList from "../../components/api";

let api=  ApiList.lunchApi.friday;

class FridayLunch extends React.Component{

  render(){
    return(
      <FetchAPI api={api} day="Friday"/>
    )
  }

}

export default FridayLunch;
