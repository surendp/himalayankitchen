import React from "react";

import DivWithMargin from "../../components/divWithoutMargin.jsx";
import FetchAPI from "../../components/fetchApi.jsx";

import ApiList from "../../components/api";

let api=  ApiList.alakartApi.tandooriDishes;
/*
* Render FetchAPI component by passing tandoori Dishes api
*/

const TandooriDishes = (props) => {
  return(
    <DivWithMargin>
        <FetchAPI api = {api} day = "Tandoori Dishes"/>
    </DivWithMargin>
  )
};

export default TandooriDishes;
