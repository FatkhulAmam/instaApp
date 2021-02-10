import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//import screens
import Login from '../screens/Login';
import SignIn from '../screens/Signup';
import Home from '../screens/Home';
import Activities from '../screens/Activities';
import Profile from '../screens/Profile';

import BottomNavigation from '../components/bottomNavigation';

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigation {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Post" component={Activities} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

class Route extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="InstaApp"
            component={MainApp}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Route;
