import React from 'react';
import Form from './form.jsx';
import Button from './button.jsx';
import {Prompt} from 'react-router-dom';

const ReservationFormRender = (props) =>{

  return(
    <div style={props.style}>
      <h1>Make Reservation</h1>
      <form onSubmit = {props.onClick}>
        <Form onChange={props.onChange}
              formData = {props.formData}/>
            <Prompt when={props.notSubmitted}
                    message="Form has not been submitted!! Do you want to leave this page?? "/>
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
