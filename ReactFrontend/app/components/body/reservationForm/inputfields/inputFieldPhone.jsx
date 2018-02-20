
import React from 'react';
import Input from './input.jsx';


const style = {
  width:"100%",
  height:"50px",
  fontSize:"50px"
};

var InputFieldPhone = (props) => {
  return(
    <Input placeholder = "Phone Number"
           onChange = {props.onChange}
           style = {style}/>
  );
};

export default InputFieldPhone;
