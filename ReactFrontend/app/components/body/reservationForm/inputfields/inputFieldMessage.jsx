
import React from 'react';
//import Input from './input.jsx';
import {inputFieldStyle} from './inputFieldsStyle.jsx';

const style = {
  display: inputFieldStyle.display,
  width: inputFieldStyle.width,
  fontSize: inputFieldStyle.fontSize,
  fontWeight: inputFieldStyle.fontWeight,
  color: inputFieldStyle.color,
  border: inputFieldStyle.border,
  borderBottom: inputFieldStyle.borderBottom,
  background: inputFieldStyle.background,
}

const containerStyle = {
  display: 'block',
  margin:"20px 20px 20px 20px",
  padding:"20px 20px 20px 20px",
  marginBottom: '50px'
}

/*
*render and style textArea
*Make textArea a controlled component
*/
class InputFieldMessage extends React.Component {

  constructor(props){
    super(props);
    this.state = {value:""};

    // binding the handleChange function
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    var value = e.target.value.trim();
    this.setState({value:value});
    this.props.onChange(value);
  }

  render(){
    return(
      <div style={containerStyle}>
        <textarea rows="5"
               placeholder = "Message"
               value = {this.state.value}
               onChange = {this.handleChange}
               style = {style}/>
      </div>
    )
  }
}

export default InputFieldMessage;
