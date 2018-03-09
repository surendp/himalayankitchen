import React from "react";

import DivWithMargin from "../../../modelcomponents/DivWithoutMargin.jsx";
import FetchAPI from "../../../modelcomponents/fetchApi.jsx";

// api for fetching sea dishes list
const api = "http://localhost:8080/lunch/monday";

/*
* Render FetchAPI component by passing sea Dishes api
*/

const SeaFood = (props) => {
  return(
    <DivWithMargin>
        <FetchAPI api = {api} day = "Sea Dishes"/>
    </DivWithMargin>
  )
};

export default SeaFood;
