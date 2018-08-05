import React from 'react';
import ReservationFormRender from './reservationFormRender.jsx';
import SubmitForm from './validateAndSubmit/submitForm.js';

const mainDivStyle = {
  color: 'white',
  fontSize: '40px',
  textAlign:'center',
  textShadow:'2px 2px black',
  background: 'rgba(0, 0, 0, 0.45)',
  padding: '2% 2% 2% 2%',
  margin: '5% 5% 5% 5%',
  minHeight:'80%',
  //overflowX:'show'
};

class ReservationForm extends React.Component {

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
      },
      notSubmitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick  = this.handleClick.bind(this);
  }

  // fired when some data in input fields changes
  handleChange(formData){
    this.setState({formData:formData, notSubmitted:this.checkFormData()});
  }

  // fired when submit button is clicked
  handleClick(event){
    var formData = this.state.formData;

    // instantiate SubmitForm object
    var submitForm = new SubmitForm(formData);

    // submit the form date in the given api
    var successfullySubmitted = submitForm.submitData("https://secret-castle-23220.herokuapp.com/makeReservation/");

    // prevent the form to do any default actions
    event.preventDefault();

    // update the form
    this.updateForm(successfullySubmitted);

  }

  // check the form data
  checkFormData(){
    let data = this.state.formData;
    let boolean = false;

    for(let input in data){
      if(input.length>0){
        boolean = true;
        break;
      }
    }

    return boolean;
  }

  // update the form after successfull submition
  updateForm(successfullySubmitted){
    if(successfullySubmitted){
      // location.reload();
      // alert("Your form has been submitted successfully!!");
    }
  }


  render(){
    return(
      <ReservationFormRender
          style={mainDivStyle}
          onChange={this.handleChange}
          onClick = {this.handleClick}
          name={this.state.formData.name}
          formData = {this.state.formData}
          notSubmitted = {this.state.notSubmitted} />
    )
  }

}

export default ReservationForm;
