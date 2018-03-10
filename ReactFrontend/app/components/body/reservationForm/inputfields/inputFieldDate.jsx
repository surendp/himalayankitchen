
import React from 'react';
import Input from './input.jsx';
import {inputFieldStyle} from './inputFieldsStyle.jsx';

const style = {
  display: inputFieldStyle.display,
  width: inputFieldStyle.mediumWidth,
  height: inputFieldStyle.height,
  fontSize: inputFieldStyle.fontSize,
  fontWeight: inputFieldStyle.fontWeight,
  color: inputFieldStyle.color,
  border: inputFieldStyle.border,
  borderBottom: inputFieldStyle.borderBottom,
  background: inputFieldStyle.background
}

var InputFieldDate = (props) => {
  return(
    <Input placeholder = "20/02/2018"
           onChange = {props.onChange}
           style = {style}/>
  );
};

export default InputFieldDate;
