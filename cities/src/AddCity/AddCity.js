import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import uuidV4 from "uuid/v4";
import { colors } from "../theme";
import { TextInput } from "react-native-gesture-handler";

export default class AddCity extends React.Component {
  state = {
    city: "",
    country: ""
  };

  onChangeText = (key, value) => {
    this.state({
      [key]: value
    });
  };
  submit = () => {};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}> Cities App</Text>
        <TextInput
          style={styles.input}
          placeholder="City name"
          value={this.state.city}
          onChange={val => this.onChangeText("city", val)}
        />
        <TextInput
          placeholder="City name"
          value={this.state.city}
          onChange={val => this.onChangeText("city", val)}
          style={styles.input}
        />

        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add City</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    margin: 10,
    paddingHorizontal: 8,
    height: 50
  },
  button: {
    height: 50,
    backgroundColor: "#666",
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  buttonText: {
    color: "white"
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: "center"
  },
  heading: {
    fontSize: 30,
    textAlign: "center",
    margin: 10
  }
});
