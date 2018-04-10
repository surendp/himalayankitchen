
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
            <br/><br/><br/>
            <NavItem title="Appetizers" path={match.url+ '/appetizers'}/>
            <NavItem title="Salads" path={match.url + '/salads'} />
            <NavItem title="Children Menu" path={match.url + '/childrenmenu'} />
            <NavItem title="Desserts" path={match.url + '/desserts'} />
            <NavItem title="Drinks" path={match.url + '/drinks'} />
            <NavItem title="Group Menu" path={match.url + '/groupmenu'} />
            <NavItem title="Chicken Dishes" path={match.url + '/chickendishes'} />
            <NavItem title="Duck Dishes" path={match.url + '/duckdishes'} />
            <NavItem title="Lamb Dishes" path={match.url + '/lambdishes'} />
            <NavItem title="Sea Food" path={match.url + '/seafood'} />
            <NavItem title="Tandoori Dishes" path={match.url + '/tandooridishes'} />
            <NavItem title="Thali Dishes" path={match.url + '/thalidishes'} />
            <NavItem title="Vegetarian Dishes" path={match.url + '/vegetariandishes'} />
        </div>)
}

// export default component
export default NestedNavLinkForMenu;
