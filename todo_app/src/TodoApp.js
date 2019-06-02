import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AddTodo from "./containers/AddToDo";

export default class TodoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddTodo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
