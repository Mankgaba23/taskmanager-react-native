import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NativeScreenContainer } from '@react-navigation/native';
import { signIn } from '../services';
import { firebase } from '../config/firebaseConfig';
require('firebase/auth')

const login = ({ navigation }) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handlePress = () => {
      if (!email) {
         alert('Please enter your email.');
      }
      if (!password) {
         alert('Please enter your password.');
      }
      if (email && password) {
         signIn(email, password).then(() => {
            let user = firebase.auth().currentUser
            console.log(user.uid);
            if (user) {
               navigation.navigate('homeScreen');
               setEmail('');
               setPassword('');
            }
         });
         
      };

   };
   return (
      <View style={styles.container}>
         <Image source={require('../assets/task.png')} style={{height:150,width:'100%',marginBottom: 50,}}resizeMode="contain" />
         <Text style={styles.BoldWeight}>welcome Back</Text>
         <Text>Sign in to your account</Text>
         <TextInput
            style={styles.Input}
            placeholder="Enter your email"
            autoCapitalize="none"
            value={email}
            onChangeText={(email) => setEmail(email)}
         />
         <TextInput
            style={styles.Input}
            placeholder="Enter your password"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
         />
         <TouchableOpacity style={styles.BtnSignup} onPress={handlePress}>
            <Text style={styles.TxtColor}>Submit</Text>
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
   Input: {
      margin: 5,
      height: 40,
      width: 300,
      borderColor: 'yellow',
      borderRadius: 10,
      borderWidth: 2,
      backgroundColor:'yellow',
      paddingHorizontal: 15,
    paddingVertical: 10,
   },
   BtnLogin: {
      flex: 1,
      padding: 10,
      margin: 10,
      backgroundColor: 'gold',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'black',
      borderRadius: 10,
      borderWidth: 2,
      textAlign: 'center',
      height: 40,
      width: 100,
   },
   BtnSignup: {
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
      width: 300,
   },
 
   TxtColor: {
      color: 'black',
      fontSize: 20,
   },
  
   BoldWeight: {
      fontWeight: 'bold',
      fontSize: 30,
      paddingBottom: 30,
      color:'gray',
   },
   
});

export default login