/*
* renders the input field
* pass the input value to the onChange function passed as props
*/

import React from 'react';
import {Prompt} from 'react-router-dom';

// style for the div inclosing the input
const style = {
  display: 'block',
  margin:"20px 20px 20px 20px",
  padding:"20px 20px 20px 20px",
  marginBottom: '50px'
}


// default class of this component
class Input extends React.Component{

  // life cycle method
  constructor(props){
    super(props);
    //this.state = {notSubmitted:false,};
    this.handleUserInput = this.handleUserInput.bind(this);

  }

  // event handler for onChange event
  handleUserInput(e){
    const value = e.target.value;
    this.props.onChange(value);
    //this.setState({notSubmitted: (value>0)});
  }

  // render life cycle method
  render(){
    return(
      <div style={style}>
        <input type        = {this.props.inputFieldType}
               value       = {this.props.value}
               placeholder = {this.props.placeholder}
               onChange    = {this.handleUserInput}
               style       = {this.props.style}
               required
        />

      </div>
    )
  }
}

// exporting the Input field component
export default Input;
