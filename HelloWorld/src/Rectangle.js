import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
export default class Rectangle extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: 50,
    height: 50,
    margin: 10
  }
});
