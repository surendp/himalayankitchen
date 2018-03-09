import React from "react";
import PropTypes from "prop-types";

/*
* implements styles to the div
* renders all the children that are passed
*/

const BaseDiv = (props) => {
  return(
    <div styles    = {props.styles}>
      {props.children}
    </div>
  )
};

BaseDiv.propTypes = {
};

export default BaseDiv;
