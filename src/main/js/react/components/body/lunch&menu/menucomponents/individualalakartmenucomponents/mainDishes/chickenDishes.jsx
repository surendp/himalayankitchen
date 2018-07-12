import React from "react";

import DivWithMargin from "../../../modelcomponents/divWithoutMargin.jsx";
import FetchAPI from "../../../modelcomponents/fetchApi.jsx";

// api for fetching chicken dishes list
const api = "/lunch/monday";

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
