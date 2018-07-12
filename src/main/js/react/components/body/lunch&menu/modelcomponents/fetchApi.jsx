import React from 'react';
import Dish from './dish.jsx';
import ContentDiv from '../../content/contentDiv.jsx';

/*
* Fetches an api
* Creates Dish objects from the fetched data
* stores the Objects in an array
* Saves the array in its state
* Finally, renders the Dishes from its state in the form of unordered list
*/

class FetchAPI extends React.Component{

  constructor(props){
    super(props);
    // store dishes fetched from the api
    this.state = {
      dishes: []
    };
  }

  // Life cycle method where data is fetched
  componentDidMount(){
    //using fetchAndReturn method
    let dishes = this.fetchAndReturn(this.props.api);
    console.log(dishes);
    // save the dishes in the state
    //this.setState({dishes:dishes});
  }

  //Fetch the api passed as a property of this component
  //Return an array of Dish components
  fetchAndReturn(api){
    const uri = window.location.origin + api;
    //const uri = 'http://localhost:8080/lunch/monday';
    return fetch(uri)
      .then(result => result.json())
      .then(
        (data) => {
          let dishes = data.map((dish, index) => {
            // using returnDishComponent method
            return this.returnDishComponent(dish, index);
          })
          // save the dishes to the state of this component
          this.setState({dishes:dishes});
          return dishes;
        }
      )
  }

  // return a Dish component
  returnDishComponent(dish, index){
    return <Dish
                name = {dish.name}
                catagory = {dish.catagory}
                price = {dish.price}
                description = {dish.description}
            />
  }

  // returns a list of dishes from an array
  renderDishes(){
    const dishes = this.state.dishes.map((dish, index) => {
      return(
        <div  key = {index}>{dish}</div>
      )
    });

    return dishes;
  }

  // creates unordered list and renders the data
  render(){
    let dishList = <div>
                      {this.renderDishes()}
                   </div>;

    return(
      <ContentDiv
        title  ={this.props.day}
        content={dishList}
        />
    );
  }
}

export default FetchAPI;
