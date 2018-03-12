import React from 'react';
import Input from './input.jsx';
import {inputFieldStyle} from './inputFieldsStyle.jsx';

const style = {
  display: inputFieldStyle.display,
  width: inputFieldStyle.width,
  height: inputFieldStyle.height,
  fontSize: inputFieldStyle.fontSize,
  fontWeight: inputFieldStyle.fontWeight,
  color: inputFieldStyle.color,
  border: inputFieldStyle.border,
  borderBottom: inputFieldStyle.borderBottom,
  background: inputFieldStyle.background
}

var InputFieldName = (props) => {
  return(
    <Input  placeholder="Name"
            inputFieldType = "text"
            onChange={props.onChange}
            style = {style}/>
  );
};

export default InputFieldName;
