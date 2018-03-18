import React from 'react';
import ReservationFormRender from './reservationFormRender.jsx';
import SubmitForm from './validateAndSubmit/submitForm.js';

const mainDivStyle = {
  color: 'white',
  fontSize: '40px',
  textAlign:'center',
  textShadow:'2px 2px black',
  background: 'rgba(0, 0, 0, 0.45)',
  padding: '5% 5% 5% 5%',
  margin: '5% 5% 5% 5%',
  minHeight:'80%',
  //overflowX:'show'
};

class ReservationForm extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      formData: {
        name: "",
        email:"",
        phoneNumber:"",
        date:"",
        partySize:"",
        message:"",
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick  = this.handleClick.bind(this);
  }

  // fired when some data in input fields changes
  handleChange(formData){
    this.setState({formData:formData});
  }

  // fired when submit button is clicked
  handleClick(event){
    var formData = this.state.formData;

    // instantiate SubmitForm object
    var submitForm = new SubmitForm(formData);

    // submit the form date in the given api
    //var successfullySubmitted = submitForm.submitData("http://localhost:8080/makeReservation/");

    // prevent the form to do any default actions
    event.preventDefault();

    // update the form
    //this.updateForm(successfullySubmitted);
    event.target.reset();
  }

  // update the form after successfull submition
  updateForm(successfullySubmitted){
    if(successfullySubmitted){
      alert("form Submitted successfully");
      this.setState();
    }
  }


  render(){
    return(
      <ReservationFormRender
          style={mainDivStyle}
          onChange={this.handleChange}
          onClick = {this.handleClick}
          name={this.state.formData.name} />
    )
  }

}

export default ReservationForm;
