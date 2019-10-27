import React, { Component } from 'react';
import firebase from 'firebase';
import _ from 'lodash';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class FirebaseActions extends Component {
  constructor(props) {
    super(props);
    this.users = [];
  }

  add() {
    const firstName = 'User 1';
    const lastName = 'User 1';
    const id = Math.random()
      .toString(36)
      .substr(2, 9);
    const user = {
      firstName,
      lastName,
      id
    };

    firebase
      .database()
      .ref('/users')
      .push(user);
  }

  get() {
    firebase
      .database()
      .ref('/users')
      .on('value', snapshot => {
        this.users = _.map(snapshot.val(), (val, uid) => {
          return { ...val, uid };
        });
        console.log(this.users);
      });
  }

  delete() {
    const user = this.users.pop();
    console.log(user);
    if (user) {
      firebase
        .database()
        .ref(`/users/${user.uid}`)
        .remove();
      // .then(() => {
      //
      // });
    }
  }

  update() {
    const user = this.users.pop();
    console.log(user);
    if (user) {
      user.firstName = 'Update user';
      firebase
        .database()
        .ref(`/users/${user.uid}`)
        .set(user, a => {
          console.log(`OnComplete ${a}`);
        })
        .then(val => {
          console.log(`Promise ${val}`);
        });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Button title="Get" onPress={() => this.get()} />
        </View>
        <View style={styles.container}>
          <Button title="Add" onPress={() => this.add()} />
        </View>
        <View style={styles.container}>
          <Button title="Update" onPress={() => this.update()} />
        </View>
        <View style={styles.container}>
          <Button title="Delete" onPress={() => this.delete()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
