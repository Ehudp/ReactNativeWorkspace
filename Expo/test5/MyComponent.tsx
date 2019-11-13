import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IMyProps {
  firstName: String;
}

interface IMyState {
  result: boolean;
}
export default class MyComponent extends Component<IMyProps, IMyState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{this.props.firstName}</Text>
      </View>
    );
  }
}
