import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';

export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      counter: 1
    };
  }
  edit() {
    this.setState(perv => {
      return { ...perv, isEdit: !perv.isEdit, counter: ++perv.counter };
    });
  }
  finishEdit() {
    this.setState(perv => {
      return { ...perv, isEdit: false };
    });
  }
  render() {
    if (this.state.isEdit) {
      return (
        <View style={styles.container}>
          <Text>Is Edit</Text>
          <Text>{this.state.counter}</Text>
          <Button title="Finish Edit " onPress={() => this.finishEdit()} />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.viewStyle} />
        <View style={styles.buttonContainer}>
          <Button
            title="Go Back To Home Screen"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <Button title="Edit " onPress={() => this.edit()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  viewStyle: {
    flex: 4,
    justifyContent: 'center',
    backgroundColor: 'blue',
    margin: 10
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 10
  }
});
