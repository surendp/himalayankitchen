import React from 'react';
import Form from './form.jsx';
import Button from './button.jsx';

const ReservationFormRender = (props) =>{

  return(
    <div style={props.style}>
      <h1>Make Reservation</h1>
      <form onSubmit = {props.onClick}>
        <Form onChange={props.onChange}/>
        <Button type = "submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

ReservationFormRender.propTypes = {

}

export default ReservationFormRender;
