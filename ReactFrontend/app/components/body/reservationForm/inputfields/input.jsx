import React from 'react';

const style = {
  margin:"10px 10px 10px 10px",
}

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
      <div style={style}>
        <input type        = "text"
               value       = {this.state.inputFieldValue}
               placeholder = {this.props.placeholder}
               onChange    = {this.handleUserInput}
               style       = {this.props.style}
        />
      </div>
    )
  }
}

export default Input;
