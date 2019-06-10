import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AddTodo from "./containers/AddToDo";
import VisibleTodos from "./containers/VisibleTodos";
import FilterTodos from "./containers/FilterTodos";

export default class TodoApp extends Component {
  render() {
    //console.log("TodoApp store", store);
    return (
      <View style={styles.container}>
        <AddTodo />
        <FilterTodos />
        <View>
          <VisibleTodos />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  }
});
