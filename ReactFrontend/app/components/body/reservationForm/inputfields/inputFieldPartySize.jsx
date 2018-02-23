
import React from 'react';
import Input from './input.jsx';
import {inputFieldStyle} from './inputFieldsStyle.jsx';

const style = inputFieldStyle;

var InputFieldPartySize = (props) => {
  return(
    <Input placeholder = "Party Size"
           onChange = {props.onChange}
           style = {style}/>
  );
};

export default InputFieldPartySize;
