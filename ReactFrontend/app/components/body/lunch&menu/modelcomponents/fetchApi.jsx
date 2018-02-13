import React from 'react';
import Dish from './dish.jsx';


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


  render(){
    return(<div></div>);
  }
}

export default FetchAPI;
