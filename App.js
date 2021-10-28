import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './component/Welcome';
import Login from './component/Login';
import Signup from './component/Signup';
import Forgotpassword from './component/Forgotpassword';
import Homescreen from './component/Homescreen';
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
        <Stack.Screen name="Homescreen" component={Homescreen} option={{ headershown: false }} />
        <Stack.Screen name="Forgotpassword" component={Forgotpassword} option={{ headershown: false }} />
        <Stack.Screen name="resetPassword" component={resetPassword} option={{ headershown: false }} />
        <Stack.Screen name="profile" component={Profile} option={{ headershown: false }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
