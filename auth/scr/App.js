
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBR3PTfRI4pugdxGLfGXnmPSco0L400h5Y",
            authDomain: "auth-292f1.firebaseapp.com",
            databaseURL: "https://auth-292f1.firebaseio.com",
            projectId: "auth-292f1",
            storageBucket: "auth-292f1.appspot.com",
            messagingSenderId: "678462291932"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;