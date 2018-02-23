
import React from 'react';
import Input from './input.jsx';
import {inputFieldStyle} from './inputFieldsStyle.jsx';

const style = inputFieldStyle;

var InputFieldMessage = (props) => {
  return(
    <Input placeholder = "Message"
           onChange = {props.onChange}
           style = {style}/>
  );
};

export default InputFieldMessage;
