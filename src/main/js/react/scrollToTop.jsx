/*
* scrolls the current page to top on location change
*/

import React from 'react';
import {withRouter} from 'react-router-dom';

//default component
class ScrollToTop extends React.Component{

  // constructor also a life cycle method
  constructor(props){
    super(props);
    console.log("constructor is called!!");
  }

  // component will mount
  componentWillMount(){
    console.log("component will mount is called!!");
  }

  // component did mount
  componentDidMount(){
      console.log("component did mount is called!!");
  }

  // component will receive props
  componentWillReceiveProps(){
      console.log("component will receive props is called!!");
  }

  // should component update
  shouldComponentUpdate(){
    console.log("Should component update is called!!");
    return true;
  }

  // component will update
  componentWillUpdate(){
      console.log("component will update is called!!");
  }

  //life cycle method
  componentDidUpdate(prevProps){
    if(this.props.location !== prevProps.location){
      document.getElementById("app").scrollTop = 0;
    }
  }

  // render all the childern because this component will wrap the App
  render(){
    return (this.props.children);
  }

  // component will unmount
  componentWillUnmount(){
    console.log("component will unmount is called!!");
  }
}

// export the default component
// wrapped in withRouter component to provide access to router properties
export default withRouter(ScrollToTop);
