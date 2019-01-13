import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';
import { Text } from 'react-native';
import firebase from 'firebase';

class LoginForm extends Component {

    state = { email: 'Test@test.com', password: 'Aa1234', error: '' };

    onButtonPress() {
        const { email, password } = this.state;

        //  console.log(`Email ${this.state.email} Password ${this.state.password}`);
        // console.log(`Email ${email} Password ${password}`);
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({ error: 'Authentication Failed.' })
                    });
            });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label='Email'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label='Password'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <CardSection>
                    <Button onPress={() => this.onButtonPress()}>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};


export default LoginForm;