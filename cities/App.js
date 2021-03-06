/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, AsyncStorage } from "react-native";

import Container from "./src";
const key = "cities";

export default class App extends Component {
  state = {
    cities: []
  };
  componentWillMount() {
    //  AsyncStorage.clear();
  }
  async componentDidMount() {
    try {
      const cities = await AsyncStorage.getItem(key);
      this.setState({
        cities: JSON.parse(cities)
      });
    } catch (e) {
      console.log("e: ", e);
    }
  }

  addCity = city => {
    const cities = this.state.cities == null ? [] : this.state.cities;
    cities.push(city);
    AsyncStorage.setItem(key, JSON.stringify(cities))
      .then(() => console.log("item stored"))
      .catch(err => {
        console.log("error: ", err);
      });
    this.setState({ cities });
  };
  addLocation = (location, city) => {
    const index = this.state.cities.findIndex(item => {
      return item.id === city.id;
    });

    const chosenCity = this.state.cities[index];
    chosenCity.locations.push(location);

    const cities = [
      ...this.state.cities.slice(0, index),
      chosenCity,
      ...this.state.cities.slice(index + 1)
    ];
    this.setState(
      {
        cities
      },
      () => {
        AsyncStorage.setItem(key, JSON.stringify(cities))
          .then(() => console.log("item stored"))
          .catch(err => {
            console.log("error: ", err);
          });
      }
    );
  };

  render() {
    return (
      <Container
        screenProps={{
          cities: this.state.cities,
          addCity: this.addCity,
          addLocation: this.addLocation
        }}
      />
    );
  }
}
