import React from "react";

import DivWithMargin from "../../../modelcomponents/divWithoutMargin.jsx";
import FetchAPI from "../../../modelcomponents/fetchApi.jsx";

// api for fetching tandoori dishes list
const api = "/lunch/monday";

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
