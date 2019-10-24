import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import FirebaseActions from './src/FirebaseActions';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD1d_dKYbzHQS5gavWothUmQUAoxqGI6yQ',
      //  authDomain: 'test-18516.firebaseapp.com',
      databaseURL: 'https://test-18516.firebaseio.com/',
      projectId: 'test-18516',
      // storageBucket: 'test-18516.appspot.com',
      messagingSenderId: '857334559219'
    };
    firebase.initializeApp(config);
  }

  render() {
    return <FirebaseActions />;
  }
}
