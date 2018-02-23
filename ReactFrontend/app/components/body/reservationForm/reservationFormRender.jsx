import React from 'react';
import Form from './form.jsx';

const ReservationFormRender = (props) =>{

  return(
    <div style={props.style}>
      <h1>Make A Reservation</h1>
      <Form onChange={props.onChange}/>

      <h3>{(props.name!== "") ? (props.name+" is making a reservation in himalayan kitchen") : ""}</h3>
    </div>
  );
};

ReservationFormRender.propTypes = {

}

export default ReservationFormRender;
