import React from "react";

import DivWithMargin from "../../modelcomponents/divWithoutMargin.jsx";
import FetchAPI from "../../modelcomponents/fetchApi.jsx";

// api for fetching appetizers list
const api = "http://localhost:8080/lunch/monday";

/*
* Render FetchAPI component by passing ChildrenMenu api
*/

const ChildrenMenu = (props) => {
  return(
    <DivWithMargin>
        <FetchAPI api = {api} day = "Lasten Ruoka"/>
    </DivWithMargin>
  )
};

export default ChildrenMenu;
