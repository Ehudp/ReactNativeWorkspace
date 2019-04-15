import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from "react-native";

export default class TouchableOpacityComponent extends Component {
  render() {
    return (
      <TouchableOpacity style={this.props.style} onPress={this.props.onPress}>
        <Text> TouchableOpacityComponent Touch Here </Text>
      </TouchableOpacity>
    );
  }
}
