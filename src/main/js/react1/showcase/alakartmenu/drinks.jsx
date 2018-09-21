import React from "react";

import DivWithMargin from "../../components/divWithoutMargin.jsx";
import FetchAPI from "../../components/fetchApi.jsx";

import ApiList from "../../components/api";

let api=  ApiList.alakartApi.drinks;

/*
* Render FetchAPI component by passing drinks api
*/

const Drinks = (props) => {
  return(
    <DivWithMargin>
        <FetchAPI api = {api} day = "Drinks"/>
    </DivWithMargin>
  )
};

export default Drinks;
