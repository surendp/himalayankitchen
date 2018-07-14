
/*
* Create navigation links for different menu categoties
*/

import React from 'react';
import {Route, Link} from 'react-router-dom';

import NavItem from './navItem.jsx';


// NestedNavLinkForMenu component
const NestedNavLinkForMenu = ({match}) =>{

  // return the jsx expression
  return (<div>
            <br/>
            <NavItem title="Appetizers" path={match.url+ '/appetizers'} category = "sub"/>
            <NavItem title="Salads" path={match.url + '/salads'} category = "sub"/>
            <NavItem title="Children Menu" path={match.url + '/childrenmenu'} category = "sub"/>
            <NavItem title="Desserts" path={match.url + '/desserts'} category = "sub"/>
            <NavItem title="Drinks" path={match.url + '/drinks'} category = "sub"/>
            <NavItem title="Group Menu" path={match.url + '/groupmenu'} category = "sub"/>
            <NavItem title="Chicken Dishes" path={match.url + '/chickendishes'} category = "sub"/>
            <NavItem title="Duck Dishes" path={match.url + '/duckdishes'} category = "sub"/>
            <NavItem title="Lamb Dishes" path={match.url + '/lambdishes'} category = "sub"/>
            <NavItem title="Sea Food" path={match.url + '/seafood'} category = "sub"/>
            <NavItem title="Tandoori Dishes" path={match.url + '/tandooridishes'} category = "sub"/>
            <NavItem title="Thali Dishes" path={match.url + '/thalidishes'} category = "sub"/>
            <NavItem title="Vegetarian Dishes" path={match.url + '/vegetariandishes'} category = "sub"/>
        </div>)
}

// export default component
export default NestedNavLinkForMenu;
