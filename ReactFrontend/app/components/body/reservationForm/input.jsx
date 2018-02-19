import React from 'react';

class Input extends React.Component{

  constructor(props){
    super(props);
    this.state = {inputFieldValue:""};

    this.handleUserInput = this.handleUserInput.bind(this);

  }

  handleUserInput(e){
    this.setState({inputFieldValue: e.target.value});
    this.props.onChange(e.target.value);
  }

  render(){
    return(
      <div>
        <input type     = "text"
               value    = {this.state.inputFieldValue}
               placeholder = {this.props.placeholder}
               onChange = {this.handleUserInput}
        />
      </div>
    )
  }
}

export default Input;
