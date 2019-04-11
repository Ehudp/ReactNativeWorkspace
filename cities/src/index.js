import React from "react";
import AddCity from "./AddCity";
import Cities from "./Cities";
import City from "./City";

import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { colors } from "./theme";

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

const Tabs = createBottomTabNavigator({
  Cities: { screen: citiesNav },
  AddCity: { screen: AddCity }
});

export default Tabs;
