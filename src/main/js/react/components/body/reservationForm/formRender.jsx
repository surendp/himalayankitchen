
import React from 'react';
import InputFieldName from './inputfields/inputFieldName.jsx';
import InputFieldEmail from './inputfields/inputFieldEmail.jsx';
import InputFieldPhone from './inputfields/inputFieldPhone.jsx';
import InputFieldMessage from './inputfields/inputFieldMessage.jsx';
import InputFieldPartySize from './inputfields/inputFieldPartySize.jsx';
import InputFieldDate from './inputfields/inputFieldDate.jsx';

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
