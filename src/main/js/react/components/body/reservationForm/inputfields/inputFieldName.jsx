/*
* render the Input component
* pass onChange method from props to Input component
* pass name value from the form data object to Input component
*/

import React from 'react';
import Input from './input.jsx';
import {inputFieldStyle} from './inputFieldsStyle.jsx';

// style for the input field
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

// default class for this module
class InputFieldName extends React.Component{

  render(){
    return(
      <Input  placeholder="Name"
              inputFieldType = "text"
              onChange={this.props.onChange}
              value = {this.props.formData.name}
              style = {style}/>
    );
  }

}

export default InputFieldName;
