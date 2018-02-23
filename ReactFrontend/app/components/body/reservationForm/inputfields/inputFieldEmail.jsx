import React from 'react';
import Input from './input.jsx';
import {inputFieldStyle} from './inputFieldsStyle.jsx';

const style = inputFieldStyle;

var InputFieldEmail = (props) => {
  return(
    <Input placeholder="Email"
            onChange={props.onChange}
            style = {style}/>
  );
};

export default InputFieldEmail;
