import React from 'react';
import Dish from './dish.jsx';
import ContentDiv from '../../content/contentDiv.jsx';

class FetchAPI extends React.Component{

  constructor(props){
    super(props);

    // store dishes fetched from the api
    this.state = {
      dishes: []
    };

  }


  componentDidMount(){
    fetch(this.props.api)
      .then(result => result.json())
      .then(
        (data) => {
          let dishes = data.map((dish) => {
            return <Dish
                        name = {dish.name}
                        catagory = {dish.catagory}
                        price = {dish.price}
                        description = {dish.description}
                    />
          })

          this.setState({dishes:dishes});
        }
      )

  }

  renderDishes(){
    const dishes = this.state.dishes.map((dish, index) => {
      return( <li key={index}>
                {dish}
              </li>)
            });

    return dishes;
  }

  render(){
    let dishList = <div>
                      <ul>{this.renderDishes()}</ul>
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
