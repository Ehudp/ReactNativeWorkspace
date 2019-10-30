import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoCounter: 0,
      counter: 0
    };
  }

  setAutoCounter = () => {
    this.setState(
      perv => {
        console.log(`Prev counter ${perv.autoCounter}`);
        return {
          autoCounter: perv.autoCounter + 1
        };
      },
      () => {
        console.log(`state counter ${this.state.autoCounter}`);
      }
    );
  };

  componentWillMount() {
    setInterval(this.setAutoCounter, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.autoCounter}</Text>
        <Button
          title="increase"
          onPress={() => this.setState({ counter: this.state.counter + 1 })}
        />
        <Text>{this.state.counter}</Text>
        <Button
          title="increase"
          onPress={() => this.setState({ counter: this.state.counter - 1 })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
