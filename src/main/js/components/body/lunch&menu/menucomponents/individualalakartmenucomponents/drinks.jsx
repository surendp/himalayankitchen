import React from "react";

import DivWithMargin from "../../modelcomponents/divWithoutMargin.jsx";
import FetchAPI from "../../modelcomponents/fetchApi.jsx";

// api for fetching appetizers list
const api = "/lunch/monday";

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
