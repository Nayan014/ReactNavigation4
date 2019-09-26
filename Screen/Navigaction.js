import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

// Screens
import HomeScreen from './HomeScreen';
import SignInScreen from './SignInScreen';

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
    }
  },
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