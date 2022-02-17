import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NativeScreenContainer } from '@react-navigation/native';
import { registration } from '../services';

const signup = ({navigation}) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [passwordconf, setPasswordconf] = useState('');
   const [firstname, setFirstname] = useState('');
   const [lastname, setLastname] = useState('');

   const handlePress = () => {
       if (!firstname) {
         alert('Please enter your first name.');
       }
       if (!email) {
         alert('Please enter your email.');
       }
       if (!password) {
         alert('Please enter your password.');
       }
       if (!passwordconf) {
         alert('Please confirm your password.');
       }
       if(firstname && email && password && passwordconf) {
         registration(email, password, lastname, firstname)
         navigation.navigate('homeScreen');
         setFirstname('');
         setLastname('');
         setEmail('');
         setPassword('');
         setPasswordconf('');
       };

       
      
      
     };
      return (
         <View style = {styles.container}>
            <Image source = {require('../assets/task.png')}style={{height:100,width:'100%',marginBottom: 50 }}resizeMode="contain" />
            <Text style = {styles.BoldWeight}>Create an account</Text>
            <TextInput
                style={styles.Input}
                placeholder="First name*"
                autoCapitalize="none"
                value={firstname}
                onChangeText={(firstname) => setFirstname(firstname)}
            />
            <TextInput
                style={styles.Input}
                placeholder="Last name"
                autoCapitalize="none"
                value={lastname}
                onChangeText={(lastname) => setLastname(lastname)}
            />
            <TextInput
                style={styles.Input}
                placeholder="Enter your email*"
                autoCapitalize="none"
                value={email}
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                style={styles.Input}
                placeholder="Enter your password*"
                value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.Input}
                placeholder="Retype your password to confirm*"
                value={passwordconf}
                onChangeText={(passwordconf) => setPasswordconf(passwordconf)}
                secureTextEntry={true}
            />
            <TouchableOpacity style = {styles.Btnsign} onPress={handlePress}>
               <Text style = {styles.TxtColor}>Sign Up</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row'}}>
            <Text>Already have an account?</Text>
            <TouchableOpacity style = {{}} onPress = {() => navigation.navigate('Login')}>
            
               <Text style = {{color:'red'}}>Sign In</Text>
            </TouchableOpacity>
            </View>
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
      borderColor: 'gold',
      borderRadius: 10,
      borderWidth: 2,
      backgroundColor:'yellow',
      paddingHorizontal: 15,
    paddingVertical: 10,
   },
  
   Btnsign: {
      flex: 1,
      padding: 10,
      margin: 10,
      backgroundColor: 'gold',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'gold',
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
   InlineBtns: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   BoldWeight: {
      fontWeight: 'bold',
      fontSize: 30,
      paddingBottom: 30,
      color: 'gray',
   },
 
});

export default signup