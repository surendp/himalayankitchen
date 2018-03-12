
import React from 'react';
import InputFieldName from './inputfields/inputFieldName.jsx';
import InputFieldEmail from './inputfields/inputFieldEmail.jsx';
import InputFieldPhone from './inputfields/inputFieldPhone.jsx';
import InputFieldMessage from './inputfields/inputFieldMessage.jsx';
import InputFieldPartySize from './inputfields/inputFieldPartySize.jsx';
import InputFieldDate from './inputfields/inputFieldDate.jsx';

var FormRender = (props) => {

  return(
  <div>
    <InputFieldName         onChange = {props.onChangeForName} />
    <InputFieldEmail        onChange = {props.onChangeForEmail}/>
    <InputFieldPhone        onChange = {props.onChangeForPhoneNumber} />
    <InputFieldPartySize    onChange = {props.onChangeForPartySize} />
    <InputFieldDate         onChange = {props.onChangeForDate} />
    <InputFieldMessage      onChange = {props.onChangeForMessage} />
  </div>
  );
};


export default FormRender;
