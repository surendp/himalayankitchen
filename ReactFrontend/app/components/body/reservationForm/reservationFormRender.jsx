import React from 'react';
import Form from './form.jsx';

const ReservationFormRender = (props) =>{

  return(
    <div style={props.style}>
      <Form onChange={props.onChange}/>
      <h1>{(props.name!== "") ? (props.name+" is making a reservation in himalayan kitchen") : ""}</h1>
    </div>
  );
};

ReservationFormRender.propTypes = {

}

export default ReservationFormRender;
