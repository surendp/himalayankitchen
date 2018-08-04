import React from "react";

import DivWithMargin from "../../components/divWithoutMargin.jsx";
import FetchAPI from "../../components/fetchApi.jsx";

import ApiList from "../../components/api";

let api=  ApiList.alakartApi.lambDishes;
/*
* Render FetchAPI component by passing lamb Dishes api
*/

const LambDishes = (props) => {
  return(
    <DivWithMargin>
        <FetchAPI api = {api} day = "Lamb Dishes"/>
    </DivWithMargin>
  )
};

export default LambDishes;
