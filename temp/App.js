import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import TouchableOpacityComponent from "./components/TouchableOpacityComponent";
import TouchableOpacityFunction from "./components/TouchableOpacityFunction";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // renderButton = () => {
  //   return (
  //     <TouchableOpacity onPress={this._onPressButton}>
  //       <Image style={styles.button} source={require("./myButton.png")} />
  //     </TouchableOpacity>
  //   );
  // };

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    var c = this.state.count;
    debugger;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text> Touch Here </Text>
        </TouchableOpacity>

        <TouchableOpacityComponent
          style={styles.button}
          onPress={this.onPress}
        />
        <TouchableOpacityFunction
          style={[styles.button, { backgroundColor: "red", marginTop: 30 }]}
          onPress={this.onPress}
        />

        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            {this.state.count !== 0 ? this.state.count : null}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF"
  }
});
