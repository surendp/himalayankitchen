import React from "react";

import DivWithMargin from "../../modelcomponents/divWithoutMargin.jsx";
import FetchAPI from "../../modelcomponents/fetchApi.jsx";

// api for fetching appetizers list
const api = "/lunch/monday";

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
