import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/footer.css';
import facebookIcon from '../../media/facebookIcon.png';

class Footer extends React.Component{
  render(){
    return (
      <header className="App-footer">
        <img src={facebookIcon} id="fbIcon" alt="Like on Facebook" />
      </header>
    );
  }
}

export default Footer;
