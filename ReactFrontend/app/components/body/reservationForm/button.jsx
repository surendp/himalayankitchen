import React from "react";

/*
* style and render a Html button
*/

// Style object for the button
const style = {
  backgroundColor: "white",
   border: "none",
   color: "black",
   padding: "15px 32px",
   textAlign: "center",
   textDecoration:"none",
   fontSize: "25px",
   margin: "4px 2px",
   cursor: "pointer",
};

// react Button component
const Button = (props) => {
  return(
    <button style = {style}
            onClick = {props.onClick}>
        {props.children}
    </button>
  )
};

// export react button component
export default Button;
