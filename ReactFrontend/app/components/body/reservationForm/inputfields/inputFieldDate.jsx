
import React from 'react';
import Input from './input.jsx';
import {inputFieldStyle} from './inputFieldsStyle.jsx';

const style = inputFieldStyle;

var InputFieldDate = (props) => {
  return(
    <Input placeholder = "20/02/2018"
           onChange = {props.onChange}
           style = {style}/>
  );
};

export default InputFieldDate;
