import React from "react";
import AddCity from "./AddCity/AddCity";
import Cities from "./Cities/Cities";
import City from "./Cities/City";
import { colors } from "./theme";

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

const citiesNav = createStackNavigator(
  {
    Cities: { screen: Cities },
    City: { screen: City }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerTintColor: "#fff"
    }
  }
);

const tabs = createBottomTabNavigator({
  Cities: { screen: citiesNav },
  AddCity: { screen: AddCity }
});

const container = createAppContainer(tabs);
export default container;
