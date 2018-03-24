
import React from 'react';
import Input from './input.jsx';
import {inputFieldStyle} from './inputFieldsStyle.jsx';

const style = {
  display: inputFieldStyle.display,
  width: inputFieldStyle.smallWidth,
  height: inputFieldStyle.height,
  fontSize: inputFieldStyle.fontSize,
  fontWeight: inputFieldStyle.fontWeight,
  color: inputFieldStyle.color,
  border: inputFieldStyle.border,
  borderBottom: inputFieldStyle.borderBottom,
  background: inputFieldStyle.background,
}

var InputFieldPartySize = (props) => {
  return(
    <Input placeholder = "Party Size"
           inputFieldType = "number"
           onChange = {props.onChange}
           value = {props.formData.partySize}
           style = {style}/>
  );
};

export default InputFieldPartySize;
