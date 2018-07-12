import React from 'react';
import ContentDiv from './contentDiv.jsx';

const title   = <span>Our Location</span>;

const content = <span>  We are located in Eerikinkatu 5, 20100 Turku, Finland.</span>;


class Location extends React.Component{
    render(){
      return(
        <ContentDiv title = {title} content = {content} />
      );
    }
}

export default Location;
