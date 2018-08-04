import React from 'react';

import "../css/dish.css";



class Dish extends React.Component{

  render(){
    return(
      <div className="dish">
        <div className = "dish-name-price">
          <p className = "dish-name">{this.props.name}</p>
          <p className = "dish-price">{this.props.price}</p>
        </div>
        <p className = "dish-catagory">{this.props.catagory}</p>
        <p className = "dish-description">{this.props.finnishDescription}</p>
        <p className = "dish-description">{this.props.englishDescription}</p>
      </div>
    );
  }

}

export default Dish;
