import React from 'react';
import Form from './form.jsx';
import Button from './button.jsx';

const ReservationFormRender = (props) =>{

  return(
    <div style={props.style}>
      <h1>Make Reservation</h1>
      <Form onChange={props.onChange}/>
      <Button  onClick = {props.onClick}>
        submit
      </Button>
      <h1>{(props.name!== "") ? (props.name+" is making a reservation in himalayan kitchen") : ""}</h1>
    </div>
  );
};

ReservationFormRender.propTypes = {

}

export default ReservationFormRender;
