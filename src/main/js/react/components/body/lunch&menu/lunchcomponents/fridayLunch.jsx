import React from "react";
import FetchAPI from "../modelcomponents/fetchApi.jsx";

let api=  "/lunch/monday";

class FridayLunch extends React.Component{

  render(){
    return(
      <FetchAPI api={api} day="Friday"/>
    )
  }

}

export default FridayLunch;
