import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import _ from 'lodash';
import MyComponent from './MyComponent';
import CameraExample from './CameraExample';
export default function App() {
  const arr = [3, 1, 2];
  const sorted = _.sortBy(arr);
  console.log(sorted);
  return (
    <View style={styles.container}>
      <CameraExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
