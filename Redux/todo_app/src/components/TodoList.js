import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from "../actions/actionTypes";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
  }
};

const TodoList = ({ todos, toggleTodo, filter }) => {
  const visibleTodos = getVisibleTodos(todos, filter);
  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        {visibleTodos.map(todo => (
          <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
            <Text
              style={{
                fontSize: 24,
                textDecorationLine: todo.completed ? "line-through" : "none"
              }}
            >
              {todo.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
