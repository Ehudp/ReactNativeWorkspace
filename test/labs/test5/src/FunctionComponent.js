import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
export default class FunctionComponent extends Component {
  render() {
    return <Text style={styles.welcome}>Function Component</Text>;
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
