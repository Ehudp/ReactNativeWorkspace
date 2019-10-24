import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';
import { StyleSheet, Text, View } from 'react-native';

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
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
