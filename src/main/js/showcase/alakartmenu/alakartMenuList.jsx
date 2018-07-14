

/*
* Render all the component of alakart menu
*/

import React from "react";
import {Route, Switch} from "react-router-dom";

import DivWithoutMargin from "../../components/divWithoutMargin.jsx";

import Appetizers from "./appetizers.jsx";
import Salads from "./salads.jsx";
import Drinks from "./drinks.jsx";
import Desserts from "./desserts.jsx";
import GroupMenu from "./groupMenu.jsx";
import ChildrenMenu from "./childrenMenu.jsx";

import ChickenDishes from "./chickenDishes.jsx";
import DuckDishes from "./duckDishes.jsx";
import LambDishes from "./lambDishes.jsx";
import SeaFood from "./seaFood.jsx";
import TandooriDishes from "./tandooriDishes.jsx";
import ThaliDishes from "./thaliDishes.jsx";
import VegetarianDishes from "./vegetarianDishes.jsx";


// helper component for AlakartMenuList component
const RenderAllMenuList = (props) => (
  <DivWithoutMargin>
      <Appetizers />
      <Salads />
      <Drinks />
      <Desserts />
      <GroupMenu />
      <ChildrenMenu />
      <ChickenDishes />
      <LambDishes />
      <DuckDishes />
      <SeaFood />
      <TandooriDishes />
      <ThaliDishes />
      <VegetarianDishes />
  </DivWithoutMargin>
);


// default AlakartMenuList component
const AlakartMenuList = ({match}) =>(
  <div>
      <Route exact path = {match.url} component = {RenderAllMenuList} />
      <Route  path = {match.url + "/salads"} component = {Salads} />
      <Route  path = {match.url + "/desserts"} component = {Desserts} />
      <Route  path = {match.url + "/appetizers"} component = {Appetizers} />
      <Route  path = {match.url + "/drinks"} component = {Drinks} />
      <Route  path = {match.url + "/groupmenu"} component = {GroupMenu} />
      <Route  path = {match.url + "/childrenmenu"} component = {ChildrenMenu} />
      <Route  path = {match.url + "/chickendishes"} component = {ChickenDishes} />
      <Route  path = {match.url + "/lambdishes"} component = {LambDishes} />
      <Route  path = {match.url + "/duckdishes"} component = {DuckDishes} />
      <Route  path = {match.url + "/seafood"} component = {SeaFood} />
      <Route  path = {match.url + "/tandooridishes"} component = {TandooriDishes} />
      <Route  path = {match.url + "/thalidishes"} component = {ThaliDishes} />
      <Route  path = {match.url + "/vegetariandishes"} component = {VegetarianDishes} />
  </div>
  )

// export AlakartMenuList component
export default AlakartMenuList;
