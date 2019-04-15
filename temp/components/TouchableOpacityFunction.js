import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from "react-native";

const TouchableOpacityFunction = props => {
  return (
    <TouchableOpacity style={props.style} onPress={props.onPress}>
      <Text>TouchableOpacityFunction Touch Here </Text>
    </TouchableOpacity>
  );
};

export default TouchableOpacityFunction;
