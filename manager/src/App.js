
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA4wvKQA5zB1zoK43GjbKUmoWFFrLnqXNU',
      authDomain: 'manager-eec43.firebaseapp.com',
      databaseURL: 'https://manager-eec43.firebaseio.com',
      projectId: 'manager-eec43',
      storageBucket: 'manager-eec43.appspot.com',
      messagingSenderId: '445168023677'
    };
    firebase.initializeApp(config)
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

