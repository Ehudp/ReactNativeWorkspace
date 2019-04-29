import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
export default class HelloComponent extends Component {
  render() {
    return <Text style={styles.welcome}>Hello World</Text>;
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
