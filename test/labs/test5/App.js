import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyComponent from './src/MyComponent';
import FunctionComponent from './src/FunctionComponent';
export default function App() {
  return (
    <View style={styles.container}>
      <MyComponent />
      <FunctionComponent />
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
