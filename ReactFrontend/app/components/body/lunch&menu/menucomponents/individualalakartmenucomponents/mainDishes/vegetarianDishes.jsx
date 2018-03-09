import React from "react";

import DivWithMargin from "../../../modelcomponents/DivWithoutMargin.jsx";
import FetchAPI from "../../../modelcomponents/fetchApi.jsx";

// api for fetching Vegetarian dishes list
const api = "http://localhost:8080/lunch/monday";

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
