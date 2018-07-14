
import React from 'react';
import InputFieldName from './inputFieldName.jsx';
import InputFieldEmail from './inputFieldEmail.jsx';
import InputFieldPhone from './inputFieldPhone.jsx';
import InputFieldMessage from './inputFieldMessage.jsx';
import InputFieldPartySize from './inputFieldPartySize.jsx';
import InputFieldDate from './inputFieldDate.jsx';

/*
* Render all the inputfields necessary for the form
*/
var FormRender = (props) => {

  return(
  <div>
    <InputFieldName         onChange = {props.onChangeForName}  formData = {props.formData}/>
    <InputFieldEmail        onChange = {props.onChangeForEmail} formData = {props.formData}/>
    <InputFieldPhone        onChange = {props.onChangeForPhoneNumber} formData = {props.formData}/>
    <InputFieldPartySize    onChange = {props.onChangeForPartySize} formData = {props.formData}/>
    <InputFieldDate         onChange = {props.onChangeForDate} formData = {props.formData}/>
    <InputFieldMessage      onChange = {props.onChangeForMessage} formData = {props.formData}/>
  </div>
  );
};

// export the component
export default FormRender;
