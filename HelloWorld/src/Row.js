import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Rectangle from "./Rectangle";

export default class Row extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Rectangle />
        <Rectangle />
        <Rectangle />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#F5FCFF"
  }
});
