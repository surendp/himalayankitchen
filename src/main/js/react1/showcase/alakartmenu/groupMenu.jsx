import React from "react";

import DivWithMargin from "../../components/divWithoutMargin.jsx";
import FetchAPI from "../../components/fetchApi.jsx";

import ApiList from "../../components/api";

let api=  ApiList.alakartApi.groupMenu;

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
