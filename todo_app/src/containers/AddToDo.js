import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class AddTodo extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Eg. Create New Video"
        />
        <TouchableOpacity onPress={() => alert("add todo")}>
          <View style={styles.iconContainerStyle}>
            <Icon
              name={Platform.OS === "ios" ? "ios-add" : "md-add"}
              size={30}
              style={styles.iconStyle}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    marginHorizontal: 20
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "#f2f2e1",
    backgroundColor: "#eaeaea",
    height: 50,
    flex: 1,
    padding: 5
  },
  iconContainerStyle: {
    height: 50,
    backgroundColor: "#eaeaea",
    alignItems: "center",
    justifyContent: "center"
  },
  iconStyle: {
    color: "#de9595",
    padding: 10
  }
});
