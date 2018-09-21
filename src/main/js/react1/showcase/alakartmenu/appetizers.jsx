import React from "react";

import DivWithMargin from "../../components/divWithoutMargin.jsx";
import FetchAPI from "../../components/fetchApi.jsx";

import ApiList from "../../components/api";

let api=  ApiList.alakartApi.appetizers;
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
