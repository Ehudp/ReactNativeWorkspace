import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MyComponent extends React.Component {
  render() {
    console.log('MyComponent');
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>MyComponent</Text>
      </View>
    );
  }
}

var MyFunc = function() {
  console.log('MyFunc');
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>MyFunc</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <MyFunc />
      <MyComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
