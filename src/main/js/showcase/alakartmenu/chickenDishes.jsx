import React from "react";

import DivWithMargin from "../../components/divWithoutMargin.jsx";
import FetchAPI from "../../components/fetchApi.jsx";

import ApiList from "../../components/api";

let api=  ApiList.alakartApi.chickenDishes;

/*
* Render FetchAPI component by passing Chicken Dishes api
*/

const ChickenDishes = (props) => {
  return(
    <DivWithMargin>
        <FetchAPI api = {api} day = "Chicken Dishes"/>
    </DivWithMargin>
  )
};

export default ChickenDishes;
