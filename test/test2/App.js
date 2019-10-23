import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

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
      <Button title="click" onPress={() => alert('Hello World')} />
      <Image
        source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
        style={{ width: 40, height: 40 }}
      />
      <Image
        style={{
          width: 51,
          height: 51,
          resizeMode: 'contain'
        }}
        source={{
          uri:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
        }}
      />
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
