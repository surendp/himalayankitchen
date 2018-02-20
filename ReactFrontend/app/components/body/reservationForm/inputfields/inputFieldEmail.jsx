import React from 'react';
import Input from './input.jsx';

const style = {
  width:"100%",
  height:"50px",
  fontSize:"50px"
};

var InputFieldEmail = (props) => {
  return(
    <Input placeholder="Email"
            onChange={props.onChange}
            style = {style}/>
  );
};

export default InputFieldEmail;
