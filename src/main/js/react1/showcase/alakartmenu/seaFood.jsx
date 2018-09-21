import React from "react";

import DivWithMargin from "../../components/divWithoutMargin.jsx";
import FetchAPI from "../../components/fetchApi.jsx";

import ApiList from "../../components/api";

let api=  ApiList.alakartApi.seaDishes;

/*
* Render FetchAPI component by passing sea Dishes api
*/

const SeaFood = (props) => {
  return(
    <DivWithMargin>
        <FetchAPI api = {api} day = "Sea Dishes"/>
    </DivWithMargin>
  )
};

export default SeaFood;
