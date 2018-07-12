import React from "react";

/*
* style and render a Html button
*/

// Style object for the button
const style = {
   display: 'block',
   width: '90%',
   backgroundColor: "#ff9900",
   border: "none",
   color: "white",
   padding: "3% 4% 3% 4%",
   textAlign: "center",
   fontSize: "auto",
   fontWeight: 'bold',
   margin: "4% 4% 4% 4%",
   cursor: "pointer",
   borderRadius: '1em'
};

// react Button component
const Button = (props) => {
  return(
    <button style = {style}
            onClick = {props.onClick}
            type = {props.type}>
        {props.children}
    </button>
  )
};

// export react button component
export default Button;
