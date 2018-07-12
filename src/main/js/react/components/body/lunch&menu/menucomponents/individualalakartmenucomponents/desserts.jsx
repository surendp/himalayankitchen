import React from "react";

import DivWithMargin from "../../modelcomponents/divWithoutMargin.jsx";
import FetchAPI from "../../modelcomponents/fetchApi.jsx";

// api for fetching appetizers list
const api = "/lunch/monday";

/*
* Render FetchAPI component by passing Desserts api
*/

const Desserts = (props) => {
  return(
    <DivWithMargin>
        <FetchAPI api = {api} day = "Desserts"/>
    </DivWithMargin>
  )
};

export default Desserts;
