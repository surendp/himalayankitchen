import React from "react";

import DivWithMargin from "../../components/divWithoutMargin.jsx";
import FetchAPI from "../../components/fetchApi.jsx";

import ApiList from "../../components/api";

let api=  ApiList.alakartApi.thaliDishes;

/*
* Render FetchAPI component by passing thali Dishes api
*/

const ThaliDishes = (props) => {
  return(
    <DivWithMargin>
        <FetchAPI api = {api} day = "Thali Dishes"/>
    </DivWithMargin>
  )
};

export default ThaliDishes;
