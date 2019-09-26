import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                <Button
                    title="Logout"
                    color="red"
                    onPress={() => this.props.navigation.navigate('Auth')}
                />
            </View>
        )
    }
}
