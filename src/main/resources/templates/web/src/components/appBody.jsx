import React from 'react';
import '../styles/appBody.css';
import HomeContent from './homeContent.jsx';
import bg1 from '../media/bg1.jpg';
import bg2 from '../media/bg2.jpg';
import bg3 from '../media/bg3.jpg';

class appBody extends React.Component {
  render() {
    return (
      <div className="app-Body">
        <img src={bg1} className="slides" alt="logo" />
        <HomeContent />
        <img src={bg2} className="slides" alt="logo" />
        <img src={bg3} className="slides" alt="logo" />
      </div>
    )
  }
}


export default appBody;
