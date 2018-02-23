import React from 'react';
import Input from './input.jsx';
import {inputFieldStyle} from './inputFieldsStyle.jsx';

const style = inputFieldStyle;

var InputFieldName = (props) => {
  return(
    <Input placeholder="Name"
            onChange={props.onChange}
            style = {style}/>
  );
};

export default InputFieldName;
