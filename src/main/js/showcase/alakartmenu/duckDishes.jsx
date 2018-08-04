import React from "react";

import DivWithMargin from "../../components/divWithoutMargin.jsx";
import FetchAPI from "../../components/fetchApi.jsx";


import ApiList from "../../components/api";

let api=  ApiList.alakartApi.duckDishes;

/*
* Render FetchAPI component by passing duck Dishes api
*/

const DuckDishes = (props) => {
  return(
    <DivWithMargin>
        <FetchAPI api = {api} day = "Duck Dishes"/>
    </DivWithMargin>
  )
};

export default DuckDishes;
