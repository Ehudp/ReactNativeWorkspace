/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import Container from "./src";

export default class App extends Component {
  state = {
    cities: []
  };

  addCity = city => {
    const cities = this.state.cities;
    cities.push(city);
    this.setState({ cities });
  };
  addLocation = () => {};

  render() {
    return (
      <Container
        screenProps={{
          cities: this.state.cities,
          addCity: this.addCity
        }}
      />
    );
  }
}
