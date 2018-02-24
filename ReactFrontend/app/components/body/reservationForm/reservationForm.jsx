import React from 'react';
import ReservationFormRender from './reservationFormRender.jsx';
import SubmitForm from './submitForm.js';

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

  handleChange(formData){
    this.setState({formData:formData});
  }

  handleClick(){
    var formData = this.state.formData;
    var submitForm = new SubmitForm(formData);

    submitForm.submitData("http://localhost:8080/makeReservation/");
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
