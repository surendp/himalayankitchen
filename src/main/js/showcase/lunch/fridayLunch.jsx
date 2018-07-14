import React from "react";
import FetchAPI from "../../components/fetchApi.jsx";

let api=  "/lunch/friday";

class FridayLunch extends React.Component{

  render(){
    return(
      <FetchAPI api={api} day="Friday"/>
    )
  }

}

export default FridayLunch;
