import React from "react";

import DivWithMargin from "../../modelcomponents/divWithoutMargin.jsx";
import FetchAPI from "../../modelcomponents/fetchApi.jsx";

// api for fetching appetizers list
const api = "http://localhost:8080/lunch/monday";

/*
* Render FetchAPI component by passing Salads api
*/

const Salads = (props) => {
  return(
    <DivWithMargin>
        <FetchAPI api = {api} day = "Salads"/>
    </DivWithMargin>
  )
};

export default Salads;
