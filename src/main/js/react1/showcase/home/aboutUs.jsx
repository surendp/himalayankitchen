import React from 'react';
import ContentDiv from '../../components/contentDiv.jsx';

const title   = <span>About US</span>;

const content = <span>With an aim to deliver true Nepalese Cuisine to the heart of historically important old city, we have now opened Himalayan Kitchen in Turku. Everyone are welcome to experience the original flavours and hospitality of Nepal at the Himalayan Kitchen. We are open everyday throughout the week to serve you with many different menu items.
Come, experience and enjoy your moments, which is our high priority.

<h4>Come, experience and enjoy your moments, which is our high priority.</h4></span>;



class AboutUs extends React.Component{
    render(){
        return (
            <ContentDiv
              title = {title}
              content = {content}/>
        );
    }
}

export default AboutUs;
