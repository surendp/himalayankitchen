import React from "react";

import DivWithMargin from "../../modelcomponents/divWithoutMargin.jsx";
import FetchAPI from "../../modelcomponents/fetchApi.jsx";

// api for fetching appetizers list
const api = "/lunch/tuesday";

/*
* Render FetchAPI component by passing appetizers api
*/

const Appetizers = (props) => {
  return(
    <DivWithMargin>
        <FetchAPI api = {api} day = "Appetizers"/>
    </DivWithMargin>
  )
};

export default Appetizers;
