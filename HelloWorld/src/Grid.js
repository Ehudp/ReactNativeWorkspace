import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Row from "./Row";

export default class Grid extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.columnStyle}>
          <Row />
          <Row />
          <Row />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  columnStyle: {
    flexDirection: "column",
    backgroundColor: "#F5FCFF"
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#F5FCFF",
    alignItems: "center"
  }
});
