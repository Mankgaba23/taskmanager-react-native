import React, { component, useState } from 'react';
import { StyleSheet, Text, View, Alert, TextInput, Image, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../config/firebaseConfig';
import { signIn } from '../service';
require('firebase/auth')



const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePress = () => {
        if (!email) {
            Alert.alert('Email field is required.');
        }

        if (!password) {
            Alert.alert('Password field is required.');
        }

        signIn(email, password).then(() => {
            let user = firebase.auth().currentUser
            if (user) {
                navigation.navigate('HomeScreen');
            }
        });

        setEmail('');
        setPassword('');

    };

    return (
        <View style={styles.container}>
            <Image
                style={{ width: '100%', height: 300 }}
                source={require('../assets/task.png')}
                resizeMode="contain"
            />
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Welcome Back</Text>

            <Text style={{ fontSize: 20, color: 'gold' }}>Sign in to your account:</Text>

            <TextInput
                style={{ padding: 10, width: 300, borderRadius: 30, backgroundColor: 'white', marginHorizontal: 2 }}
                placeholder="Enter your email"
                autoCapitalize="none"
                value={email}
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                style={{ padding: 10, width: 300, borderRadius: 30, backgroundColor: 'white', marginHorizontal: 2 }}
                placeholder="Enter your password"
                value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true}
            />
            <TouchableOpacity style={{ padding: 10, width: 300, borderRadius: 20, backgroundColor: 'gold', marginHorizontal: 2 }}
                onPress={handlePress}>
                <Text style={{ textAlign: 'center', color: 'black', fontSize: 18 }}>Sumbit</Text>
            </TouchableOpacity>



        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        buttonText: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Login;