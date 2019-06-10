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
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends Component {
  state = {
    text: ""
  };

  addTodo = text => {
    //redux store
    console.log(this.props);
    this.props.dispatch(addTodo(text));

    this.setState({ text: "" });
  };

  render() {
    // console.log("AddTodo ", store);
    return (
      <View style={styles.containerStyle}>
        <TextInput
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          style={styles.inputStyle}
          placeholder="Eg. Create New Video"
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
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

export default connect()(AddTodo);

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
