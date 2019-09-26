import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class SignInScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                <Button
                    title="Login"
                    onPress={() => this.props.navigation.navigate('App')}
                />
            </View>
        )
    }
}
