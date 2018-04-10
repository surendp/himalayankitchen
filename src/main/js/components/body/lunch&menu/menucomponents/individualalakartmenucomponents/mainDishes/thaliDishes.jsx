import React from "react";

import DivWithMargin from "../../../modelcomponents/divWithoutMargin.jsx";
import FetchAPI from "../../../modelcomponents/fetchApi.jsx";

// api for fetching thali dishes list
const api = "http://localhost:8080/lunch/monday";

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
