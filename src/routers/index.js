import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//import screens
import Login from '../screens/Login';
import SignIn from '../screens/Signup';
import Home from '../screens/Home';
import Posting from '../screens/Posting';
import EditPost from '../screens/EditPost';
import Profile from '../screens/Profile';
import Comment from '../screens/Comment';

import BottomNavigation from '../components/bottomNavigation';

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigation {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Post" component={Posting} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

class Route extends Component {
  render() {
    return (
      <NavigationContainer>
        {!this.props.auth.isLogin ? (
          <Stack.Navigator>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="InstaApp"
              component={MainApp}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Comment"
              component={Comment}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="EditPost"
              component={EditPost}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Route);
