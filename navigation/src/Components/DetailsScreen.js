import React, { Component } from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default class DetailsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewStyle} />
        <View style={styles.buttonContainer}>
          <Button
            title="Go Back To Home Screen"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
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
