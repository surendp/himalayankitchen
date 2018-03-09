import React from "react";

import DivWithMargin from "../../modelcomponents/DivWithoutMargin.jsx";
import FetchAPI from "../../modelcomponents/fetchApi.jsx";

// api for fetching appetizers list
const api = "http://localhost:8080/lunch/monday";

/*
* Render FetchAPI component by passing drinks api
*/

const Drinks = (props) => {
  return(
    <DivWithMargin>
        <FetchAPI api = {api} day = "Drinks"/>
    </DivWithMargin>
  )
};

export default Drinks;
