import React from "react";

import DivWithMargin from "../../../modelcomponents/divWithoutMargin.jsx";
import FetchAPI from "../../../modelcomponents/fetchApi.jsx";

// api for fetching lamb dishes list
const api = "/lunch/monday";

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
