import React from 'react';

// style for the main div
const styleDiv = {
  marginTop:"2%" 
};

// styles for name
const styleName = {
  textSize: '3em',
};

// styles for price
const stylePrice = {
  textSize: '3em',
};

// styles for catagory
const styleCategory = {
  textSize: '3em',
};

// styles for description
const styleDescription = {
  textSize: '3em',
};

class Dish extends React.Component{

  render(){
    return(
      <div styles = {styleDiv}>
        <p styles = {styleName}>{this.props.name}</p>
        <p styles = {stylePrice}>{this.props.price}</p>
        <p styles = {styleCategory}>{this.props.catagory}</p>
        <p styles = {styleDescription}>{this.props.description}</p>
      </div>
    );
  }

}

export default Dish;
