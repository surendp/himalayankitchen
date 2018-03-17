

/*
* Render all the component of alakart menu
*/

import React from "react";
import {Route, Switch} from "react-router-dom";

import DivWithoutMargin from "../modelcomponents/DivWithoutMargin.jsx";

import Appetizers from "./individualalakartmenucomponents/appetizers.jsx";
import Salads from "./individualalakartmenucomponents/salads.jsx";
import Drinks from "./individualalakartmenucomponents/drinks.jsx";
import Desserts from "./individualalakartmenucomponents/desserts.jsx";
import GroupMenu from "./individualalakartmenucomponents/groupMenu.jsx";
import ChildrenMenu from "./individualalakartmenucomponents/childrenMenu.jsx";

import ChickenDishes from "./individualalakartmenucomponents/mainDishes/chickenDishes.jsx";
import DuckDishes from "./individualalakartmenucomponents/mainDishes/duckDishes.jsx";
import LambDishes from "./individualalakartmenucomponents/mainDishes/lambDishes.jsx";
import SeaFood from "./individualalakartmenucomponents/mainDishes/seaFood.jsx";
import TandooriDishes from "./individualalakartmenucomponents/mainDishes/tandooriDishes.jsx";
import ThaliDishes from "./individualalakartmenucomponents/mainDishes/thaliDishes.jsx";
import VegetarianDishes from "./individualalakartmenucomponents/mainDishes/vegetarianDishes.jsx";


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
