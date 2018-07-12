import React from "react";
import BaseDiv from "./baseDiv.jsx";

/*
*  remove margins from the baseDiv
*  render the childerns of this component
*/

// styles for DivWithoutMargin component
const stylesWithoutMargin = {
  height: "100%",
  width : "100%",
  margin: "0% 0% 0% 0%",
  padding: "5% 0% 5% 0%",
};

const stylesWithMargin = {
  height: "100%",
  width : "100%",
  margin: "5% 5% 5% 5%",
  padding: "5% 0% 5% 0%",
}

// Create a react component DivWithoutMargin
const DivWithoutMargin = (props) => {
  return (
    <BaseDiv styles = {stylesWithoutMargin}>
      {props.children}
    </BaseDiv>
  )
};

// Create a react component DivWithMargin
const DivWithMargin = (props) => {
  return (
    <BaseDiv styles = {stylesWithMargin}>
        {props.children}
    </BaseDiv>
  )
};

// export the component DivWithoutMargin
export default DivWithoutMargin;

// export the component DivWithMargin
export  {DivWithMargin};
