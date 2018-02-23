
import React from 'react';
import Input from './input.jsx';
import {inputFieldStyle} from './inputFieldsStyle.jsx';

const style = inputFieldStyle;

var InputFieldPhone = (props) => {
  return(
    <Input placeholder = "Phone Number"
           onChange = {props.onChange}
           style = {style}/>
  );
};

export default InputFieldPhone;
