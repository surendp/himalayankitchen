import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/homePageContent.css';
import Buttons from './buttons/Buttons.jsx';



class HomePageContent extends React.Component{
  render(){
    return (
        <div className="homePageContent">
            <Buttons />
        </div>
    );
  }
}

export default HomePageContent;
