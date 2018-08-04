import React from "react";

import DivWithMargin from "../../components/divWithoutMargin.jsx";
import FetchAPI from "../../components/fetchApi.jsx";

import ApiList from "../../components/api";

let api=  ApiList.alakartApi.salads;

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
