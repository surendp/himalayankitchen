import React from "react";

import DivWithMargin from "../../components/divWithoutMargin.jsx";
import FetchAPI from "../../components/fetchApi.jsx";

import ApiList from "../../components/api";

let api=  ApiList.alakartApi.vegetarianDishes;
/*
* Render FetchAPI component by passing Vegetarian Dishes api
*/

const VegetarianDishes = (props) => {
  return(
    <DivWithMargin>
        <FetchAPI api = {api} day = "Vegetarian Dishes"/>
    </DivWithMargin>
  )
};

export default VegetarianDishes;
