
import React from 'react';
//import Input from './input.jsx';
import {inputFieldStyle} from './inputFieldsStyle.jsx';

const style = {
  display: inputFieldStyle.display,
  width: inputFieldStyle.width,
  fontSize: inputFieldStyle.fontSize,
  fontWeight: inputFieldStyle.fontWeight,
  color: inputFieldStyle.color,
  border: inputFieldStyle.border,
  borderBottom: inputFieldStyle.borderBottom,
  background: inputFieldStyle.background,
}

const containerStyle = {
  display: 'block',
  margin:"20px 20px 20px 20px",
  padding:"20px 20px 20px 20px",
  marginBottom: '50px'
}

var InputFieldMessage = (props) => {
  return(
    <div style={containerStyle}>
      <textarea rows="5"
             placeholder = "Message"
             style = {style}/>
    </div>

  );
};

export default InputFieldMessage;
