import React from 'react';

const style = {
  display: 'block',
  margin:"20px 20px 20px 20px",
  padding:"20px 20px 20px 20px",
  marginBottom: '50px'
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
        <input type        = {this.props.inputFieldType}
               value       = {this.state.inputFieldValue}
               placeholder = {this.props.placeholder}
               onChange    = {this.handleUserInput}
               style       = {this.props.style}
               required
        />
      </div>
    )
  }
}

export default Input;
