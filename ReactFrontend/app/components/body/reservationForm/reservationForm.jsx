import React from 'react';
import ReservationFormRender from './reservationFormRender.jsx';

const mainDivStyle = {
  color: 'white',
  textAlign:'center',
  textShadow:'2px 2px black',
  background: 'rgba(0, 0, 0, 0.45)',
  padding: '5% 5% 5% 5%',
  margin: '5% 5% 5% 5%',
};

class ReservationForm extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      formData: {
        name: "",
        email: "",
      }
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(formData){
    this.setState({formData:formData});
  }

  render(){
    return(
      <ReservationFormRender
          style={mainDivStyle}
          onChange={this.handleChange}
          name={this.state.formData.name} />
    )
  }

}

export default ReservationForm;
