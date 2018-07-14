import React from 'react';
import ContentDiv from '../../components/contentDiv.jsx';

const title   = <span>Home Delivery</span>;

const content = <span>We are using Foodora service to deliver the best quality desired food to our customers quickly and carefully. You can order our food online to get them delivered to you <a href="https://www.foodora.fi/en/restaurant/s2mj/himalayan-kitchen-vendor?r=1" target="_blank">here</a>.</span>;


class HomeDelivery extends React.Component{
    render(){
      return(
            <ContentDiv title = {title} content = {content} />
      );
    }
}

export default HomeDelivery;
