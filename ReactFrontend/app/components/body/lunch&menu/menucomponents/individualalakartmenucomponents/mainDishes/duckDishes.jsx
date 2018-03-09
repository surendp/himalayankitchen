import React from "react";

import DivWithMargin from "../../../modelcomponents/DivWithoutMargin.jsx";
import FetchAPI from "../../../modelcomponents/fetchApi.jsx";

// api for fetching duck dishes list
const api = "http://localhost:8080/lunch/monday";

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
