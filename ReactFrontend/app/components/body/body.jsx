import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/body.css';
import HomePageContent from './homePageContent.jsx';


class Body extends React.Component{
  render(){
    return (
        <div className="styleMainBodyDiv">
          <HomePageContent />
        </div>
    );
  }
}

export default Body;
