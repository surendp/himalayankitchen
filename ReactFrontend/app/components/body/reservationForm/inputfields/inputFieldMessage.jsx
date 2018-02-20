
import React from 'react';
import Input from './input.jsx';


const style = {
  width:"100%",
  height:"250px",
  fontSize:"50px"
};

var InputFieldMessage = (props) => {
  return(
    <Input placeholder = "Message"
           onChange = {props.onChange}
           style = {style}/>
  );
};

export default InputFieldMessage;
