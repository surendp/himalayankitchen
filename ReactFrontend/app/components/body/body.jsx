import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/body.css';
import AboutUs from './aboutUs.jsx';

class Body extends React.Component{
  render(){
    return (
        <div className="styleMainBodyDiv">
            <AboutUs />
        </div>
    );
  }
}

export default Body;
