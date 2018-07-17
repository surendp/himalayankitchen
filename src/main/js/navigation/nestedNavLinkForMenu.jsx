
/*
* Create navigation links for different menu categoties
*/

import React from 'react';
import {Route, Link} from 'react-router-dom';

import SubMenuNavItem from '../components/subMenuNavItem.jsx';


// NestedNavLinkForMenu component
class NestedNavLinkForMenu extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      recentActive: ""
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(recentActive){
    this.setState({
      recentActive : recentActive
    })
  }



  // return the jsx expression
  render (){
    return (<div>
              <br/>
              <SubMenuNavItem title = "Appetizers" scrollId = "Appetizers" currentActive = {this.state.recentActive} handleClick={this.handleClick}/>
              <SubMenuNavItem title = "Salads" scrollId = "Salads"  currentActive = {this.state.recentActive} handleClick={this.handleClick}/>
              <SubMenuNavItem title = "Children Menu" scrollId = "Children_Menu"  currentActive = {this.state.recentActive} handleClick={this.handleClick}/>
              <SubMenuNavItem title = "Desserts" scrollId = "Desserts"  currentActive = {this.state.recentActive} handleClick={this.handleClick}/>
              <SubMenuNavItem title = "Drinks" scrollId = "Drinks"  currentActive = {this.state.recentActive} handleClick={this.handleClick}/>
              <SubMenuNavItem title = "Group Menu" scrollId = "Group_Menu"  currentActive = {this.state.recentActive} handleClick={this.handleClick}/>
              <SubMenuNavItem title = "Chicken Dishes" scrollId = "Chicken_Dishes"  currentActive = {this.state.recentActive} handleClick={this.handleClick}/>
              <SubMenuNavItem title = "Duck Dishes" scrollId = "Duck_Dishes"  currentActive = {this.state.recentActive} handleClick={this.handleClick}/>
              <SubMenuNavItem title = "Lamb Dishes" scrollId = "Lamb_Dishes"  currentActive = {this.state.recentActive} handleClick={this.handleClick}/>
              <SubMenuNavItem title = "Sea Food" scrollId = "Sea_Food"  currentActive = {this.state.recentActive} handleClick={this.handleClick}/>
              <SubMenuNavItem title = "Tandoori Dishes" scrollId = "Tandoori_Dishes"  currentActive = {this.state.recentActive} handleClick={this.handleClick}/>
              <SubMenuNavItem title = "Thali Dishes" scrollId = "Thali_Dishes"  currentActive = {this.state.recentActive} handleClick={this.handleClick}/>
              <SubMenuNavItem title = "Vegetarian Dishes" scrollId = "Vegetarian_Dishes"  currentActive = {this.state.recentActive} handleClick={this.handleClick}/>
          </div>)
      }
}

// export default component
export default NestedNavLinkForMenu;
