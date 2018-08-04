import React from "react";

import DivWithMargin from "../../components/divWithoutMargin.jsx";
import FetchAPI from "../../components/fetchApi.jsx";

import ApiList from "../../components/api";

let api=  ApiList.alakartApi.childrenMenu;

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
