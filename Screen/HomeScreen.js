import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class HomeScreen extends Component {
    render() {
        return (
            <>
                <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>

                    <View>
                        <Button
                            title="Tabs Page"
                            color="green"
                            onPress={() => this.props.navigation.navigate('Tabs')}
                        />
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <Button
                            title="Logout"
                            color="red"

                            onPress={() => this.props.navigation.navigate('Auth')}
                        />
                    </View>

                </View>
            </>


        )
    }
}
