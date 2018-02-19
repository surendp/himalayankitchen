import React from 'react';
import Input from './input.jsx';

class Form extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      formData: {
        name: "",
        email:"",
      }
    }

    this.handleChangeForName = this.handleChangeForName.bind(this);
    this.handleChangeForEmail = this.handleChangeForEmail.bind(this);
  }

  handleChangeForName(name){
    let newFormData = Object.assign({},this.state.formData, {name:name});
    this.setStateAndPassDataToParent(newFormData);
  }

  handleChangeForEmail(email){
    let newFormData = Object.assign({}, this.state.formData, {email:email});
    this.setStateAndPassDataToParent(newFormData);
  }

  setStateAndPassDataToParent(newFormData){
    this.setState({formData:newFormData});
    this.props.onChange(newFormData);
  }

  render(){
    return(
      <div>
        <h1>Make A Reservation</h1>
        <Input placeholder="Name"
                onChange={this.handleChangeForName}/>
        <Input placeholder="Email" 
                onChange = {this.handleChangeForEmail}/>
      </div>
    )
  }
}

Form.propTypes = {

}

export default Form;
