import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/homePageContent.css';
import ImgButtons from './imgButtons.jsx';



class HomePageContent extends React.Component{
  render(){
    return (
        <div className="homePageContent">
            <ImgButtons />
        </div>
    );
  }
}

export default HomePageContent;
