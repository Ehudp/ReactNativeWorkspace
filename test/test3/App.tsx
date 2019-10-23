import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  name: string;
}

interface State {
  massage: string;
  age: number;
}

class MyComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { massage: 'hello', age: 10 };
  }

  componentDidMount() {}
  render() {
    console.log(`${this.state.massage} ${this.props.name}`);

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
      <Text>Open up App.js to start working on your app</Text>
      <Text>MyFunc</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <MyFunc />
      <MyComponent name="MyComponent" />
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
