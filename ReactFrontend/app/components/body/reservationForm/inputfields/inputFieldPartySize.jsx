
import React from 'react';
import Input from './input.jsx';


const style = {
  width:"50%",
  height:"50px",
  fontSize:"50px"
};

var InputFieldPartySize = (props) => {
  return(
    <Input placeholder = "Party Size"
           onChange = {props.onChange}
           style = {style}/>
  );
};

export default InputFieldPartySize;
