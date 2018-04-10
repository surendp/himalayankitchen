import React from 'react';
import '../../css/slideShow.css'

class SlideShow extends React.Component{
  render(){
    return (
      <ul className="styleBackground">
        <li><span>Burger</span></li>
        <li><span>Dish</span></li>
        <li><span>Momo</span></li>
        <li><span>Rice</span></li>
      </ul>
    );
  }
}

export default SlideShow;
