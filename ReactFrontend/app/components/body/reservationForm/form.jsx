import React from 'react';
import FormRender from './formRender.jsx';

class Form extends React.Component{

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
    }

    this.handleChangeForName = this.handleChangeForName.bind(this);
    this.handleChangeForEmail = this.handleChangeForEmail.bind(this);
    this.handleChangeForPhoneNumber = this.handleChangeForPhoneNumber.bind(this);
    this.handleChangeForDate = this.handleChangeForDate.bind(this);
    this.handleChangeForPartySize = this.handleChangeForPartySize.bind(this);
    this.handleChangeForMessage = this.handleChangeForMessage.bind(this);
  }

  handleChangeForName(name){
    let newFormData = Object.assign({},this.state.formData, {name:name});
    this.setStateAndPassDataToParent(newFormData);
  }

  handleChangeForEmail(email){
    let newFormData = Object.assign({}, this.state.formData, {email:email});
    this.setStateAndPassDataToParent(newFormData);
  }

  handleChangeForPhoneNumber(phoneNumber){
    let newFormData = Object.assign({}, this.state.formData, {phoneNumber:phoneNumber});
    this.setStateAndPassDataToParent(newFormData);
  }

  handleChangeForDate(date){
    let newFormData = Object.assign({}, this.state.formData, {date:date});
    this.setStateAndPassDataToParent(newFormData);
  }

  handleChangeForPartySize(partySize){
    let newFormData = Object.assign({}, this.state.formData, {partySize:partySize});
    this.setStateAndPassDataToParent(newFormData);
  }

  handleChangeForMessage(message){
    let newFormData = Object.assign({}, this.state.formData, {message:message});
    this.setStateAndPassDataToParent(newFormData);
  }

  setStateAndPassDataToParent(newFormData){
    this.setState({formData:newFormData});
    this.props.onChange(newFormData);
  }

  render(){
    return(
      <FormRender onChangeForName={this.handleChangeForName}
                  onChangeForEmail={this.handleChangeForEmail}
                  onChangeForPhoneNumber={this.handleChangeForPhoneNumber}
                  onChangeForDate = {this.handleChangeForDate}
                  onChangeForPartySize= {this.handleChangeForPartySize}
                  onChangeForMessage={this.handleChangeForMessage}
                  />
    )
  }
}

Form.propTypes = {

}

export default Form;
