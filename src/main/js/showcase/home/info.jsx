import React from 'react';
import ContentDiv from '../../components/contentDiv.jsx';

const title   = <span>Info</span>;

const content = <span>
  <h3>Opening Hours</h3>
  <h4>
    <ul>
      <li>MON- THU 11:00 - 22:00</li>
      <li>FRI 11:00 - 23:00</li>
      <li>SAT 12:00 - 23:00</li>
      <li>SUN 12:00 - 22:00</li>
    </ul>
  </h4>

  <h4>Email: kamalbanjade@yahoo.com</h4>

  <h4>Phone: (+358) 405432055 , (+358) 440712555</h4>
</span>;


class Info extends React.Component{
    render(){
      return(
        <ContentDiv title = {title} content = {content} />
      );
    }
}

export default Info;
