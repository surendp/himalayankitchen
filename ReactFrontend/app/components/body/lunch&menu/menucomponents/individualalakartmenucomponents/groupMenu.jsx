import React from "react";

import DivWithMargin from "../../modelcomponents/DivWithoutMargin.jsx";
import FetchAPI from "../../modelcomponents/fetchApi.jsx";

// api for fetching appetizers list
const api = "http://localhost:8080/lunch/monday";

/*
* Render FetchAPI component by passing GroupMenu api
*/

const GroupMenu = (props) => {
  return(
    <DivWithMargin>
        <FetchAPI api = {api} day = "Group Menu"/>
    </DivWithMargin>
  )
};

export default GroupMenu;
