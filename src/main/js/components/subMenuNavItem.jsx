
import React from 'react';
import ReactDOM from 'react-dom';

import '../css/navigation.css'


const SubMenuNavItem = ({ scrollId, title, handleClick, currentActive }) => (
  <div className="navItem"  onClick = {event => handleClick(scrollId)}>
    <a href = {"#"+ scrollId} className={(scrollId === currentActive) ? "activeTab" : "" }>{title}</a>
  </div>
)

export default SubMenuNavItem;
