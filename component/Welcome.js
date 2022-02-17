import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NativeScreenContainer } from '@react-navigation/native';

const welcome = ({navigation}) => {
      return (
         <View style = {styles.container}>
            <Image source = {require('../assets/task.png')} style={{height:300,width:'100%'}}resizeMode="contain" />
            <Text style = {styles.BoldWeight}>WELCOME</Text>
            <View style = {styles.InlineBtns}>
               <TouchableOpacity style = {styles.BtnLogin} onPress = {() => navigation.navigate('Login')}>
                  <Text style = {styles.TxtColor}>Login</Text>
               </TouchableOpacity>
               <TouchableOpacity style = {styles.BtnSignup} onPress = {() => navigation.navigate('Signup')}>
                  <Text style = {styles.TxtColor}>Signup</Text>
               </TouchableOpacity>
            </View>
            <Text>OR</Text>
            <TouchableOpacity style = {styles.BtnGoogle} onPress = {() => navigation.navigate('Google')}>
               <Text style = {styles.TxtColor}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigation.navigate('forgotPassword')}>
               <Text>Forgot Password</Text>
            </TouchableOpacity>
         </View>
      );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
   BtnLogin: {
      flex: 1,
      padding: 10,
      margin: 10,
      backgroundColor: 'gold',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'yellow',
      borderRadius: 10,
      borderWidth: 2,
      textAlign: 'center',
      height: 40,
      width: 150,
   },
   BtnSignup: {
      flex: 1,
      padding: 10,
      margin: 10,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'gold',
      borderRadius: 10,
      borderWidth: 2,
      textAlign: 'center',
      height: 40,
      width: 150,
   },
   BtnGoogle: {
      flex: 1,
      padding: 10,
      margin: 10,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'black',
      borderRadius: 10,
      borderWidth: 2,
      textAlign: 'center',
      height: 40,
      width: 300,
   },
   TxtColor: {
      color: 'black',
   },
   InlineBtns: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   BoldWeight: {
      fontWeight: 'bold',
      fontSize: 30,
      paddingBottom: 30,
      color:'gold'
   },
  
});

export default welcome