import React, { Component } from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

// Screens
import HomeScreen from './HomeScreen';
import SignInScreen from './SignInScreen';

import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';

// Icon
import IconMI from 'react-native-vector-icons/MaterialIcons';


const TabNavigator = createBottomTabNavigator({
  Tab1: {
    screen: Tab1,
    navigationOptions: {
      title: 'Tab1',
     // tabBarIcon: <IconMI name="account-balance" size={25} color='black' />
    }
  },
  Tab2: {
    screen: Tab2,
    navigationOptions: {
      title: 'Tab2',
    }
  },
  Tab3: {
    screen: Tab3,
    navigationOptions: {
      title: 'Tab3',
    }
  }
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {

        const { routeName } = navigation.state;
        let iconName;

        console.log('routeName',routeName)
        if (routeName === 'Tab1') {
          iconName = `account-balance`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
         // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Tab2') {
          iconName = `account-balance-wallet`;
        }
        else if (routeName === 'Tab3') {
          iconName = `account-circle`;
        }

        // You can return any component that you like here!
        return <IconMI name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  });

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
    }
  },
  Tabs: {
    screen: TabNavigator,
    navigationOptions: {
      title: 'Tabs',
    }
  }
});

const AuthStack = createStackNavigator({
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      header: null
    }
  },
});



export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth',
    }
  )
);