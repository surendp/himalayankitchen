import React from "react";

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

/*
* Render all the component of alakart menu
*/
const AlakartMenuList = (props) => {
  return(
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
  )
};

export default AlakartMenuList;
