import React from 'react';


class Dish extends React.Component{

  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.price}</h2>
        <h3>{this.props.catagory}</h3>
        <h4>{this.props.description}</h4>
      </div>
    );
  }

}

export default Dish;
