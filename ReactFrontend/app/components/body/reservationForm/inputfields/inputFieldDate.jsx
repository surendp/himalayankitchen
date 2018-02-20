
import React from 'react';
import Input from './input.jsx';


const style = {
  width:"100%",
  height:"50px",
  fontSize:"50px"
};

var InputFieldDate = (props) => {
  return(
    <Input placeholder = "20/02/2018"
           onChange = {props.onChange}
           style = {style}/>
  );
};

export default InputFieldDate;
