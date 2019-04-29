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

const citiesNav = createStackNavigator({
  Cities: {
    screen: Cities,
    navigationOptions: ({ navigation }) => ({
      title: "Cities",
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        textAlign: "center",
        flex: 1
      }
    })
  },
  City: {
    screen: City,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.city.city,
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "white",
        fontSize: 20,
        fontWeight: "400",
        textAlign: "center",
        flex: 1
      }
    })
  }
});

const tabs = createBottomTabNavigator({
  Cities: { screen: citiesNav },
  AddCity: { screen: AddCity }
});

const container = createAppContainer(tabs);
export default container;
