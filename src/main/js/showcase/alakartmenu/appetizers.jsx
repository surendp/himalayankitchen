import React from "react";

import DivWithMargin from "../../components/divWithoutMargin.jsx";
import FetchAPI from "../../components/fetchApi.jsx";

// api for fetching appetizers list
const api = "/alakartMenu/appetizers";

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
