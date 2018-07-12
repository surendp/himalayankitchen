import React from "react";

import DivWithMargin from "../../../modelcomponents/divWithoutMargin.jsx";
import FetchAPI from "../../../modelcomponents/fetchApi.jsx";

// api for fetching duck dishes list
const api = "/lunch/monday";

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
