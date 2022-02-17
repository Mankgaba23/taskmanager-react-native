import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './component/Welcome';
import Login from './component/Login';
import Signup from './component/Signup';
import forgotPassword from './component/forgotPassword';
import homeScreen from './component/homeScreen';
import resetPassword from './component/resetPassword';
import Profile from './component/Profile';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} option={{ headershown: false }} />
        <Stack.Screen name="Login" component={Login} option={{ headershown: false }} />
        <Stack.Screen name="Signup" component={Signup} option={{ headershown: false }} />
        <Stack.Screen name="homeScreen" component={homeScreen} option={{ headershown: false }} />
        <Stack.Screen name="forgotPassword" component={forgotPassword} option={{ headershown: false }} />
        <Stack.Screen name="resetPassword" component={resetPassword} option={{ headershown: false }} />
        <Stack.Screen name="Profile" component={Profile} option={{ headershown: false }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
