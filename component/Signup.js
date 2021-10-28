import React, { component, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, email, password, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { registration } from '../service';
import firebase from '../config/firebaseConfig';


const Signup = ({ navigation }) => {
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const emptyState = () => {
        setFirstname('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    const handlePress = () => {
        if (!firstName) {
            Alert.alert('firstname is required');
        } else if (!email) {
            Alert.alert('email is required');
        } else if (!password) {
            Alert.alert('password is required');
        } else if (!confirmPassword) {
            setPassword('');
            Alert.alert('confirm password is required');
        } else if (password !== confirmPassword) {
            Alert.alert('password does not match!');
        } else {
            registration(
                email,
                password,
                lastName,
                firstName,
            );
            navigation.navigate('Homescreen');
            emptyState();
           }
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image
                    style={{ width: '100%', height: 300 }}
                    source={require('../assets/task.png')}
                    resizeMode="contain"
                />

                <Text style={{ fontSize: 20, color: 'gold', fontWeight: 'bold' }}>Create an account:</Text>

                <TextInput
                    style={{ padding: 10, width: 300, borderRadius: 30, backgroundColor: 'white', marginHorizontal: 2 }}
                    placeholder="FirstName"
                    autoCapitalize="none"
                    value={firstName}
                    require
                    onChangeText={(firstName) => setFirstname(firstName)}
                />
                <TextInput
                    style={{ padding: 10, width: 300, borderRadius: 30, backgroundColor: 'white', marginHorizontal: 2 }}
                    placeholder="LastName"
                    autoCapitalize="none"
                    value={lastName}

                    onChangeText={(lastName) => setLastName(lastName)}

                />
                <TextInput

                    style={{ padding: 10, width: 300, borderRadius: 30, backgroundColor: 'white', marginHorizontal: 2 }}
                    placeholder="Enter your Email"
                    value={email}
                    require
                    onChangeText={(email) => setEmail(email)}

                />
                <TextInput
                    style={{ padding: 10, width: 300, borderRadius: 30, backgroundColor: 'white', marginHorizontal: 2 }}
                    placeholder="Enter your password"
                    require
                    onChangeText={(password) => setPassword(password)}
                    secureTextEntry={true}
                />
                <TextInput
                    style={{ padding: 10, width: 300, borderRadius: 30, backgroundColor: 'white', marginHorizontal: 2 }}
                    placeholder="Retype your Password"
                    value={confirmPassword}
                    onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={{ padding: 10, width: 300, borderRadius: 20, backgroundColor: 'gold', marginHorizontal: 2 }}
                    onPress={handlePress}>
                    <Text style={{ textAlign: 'center', color: 'black', fontSize: 18 }}>Signup</Text>
                </TouchableOpacity>

                <Text style={{ fontSize: 10, fontWeight: 'bold' }}> Already have an account?</Text>

                <TouchableOpacity style={{ padding: 10, width: 300, borderRadius: 20, backgroundColor: 'red', marginHorizontal: 2 }}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={{ textAlign: 'center', color: 'pink', fontSize: 18 }}>Login</Text>
                </TouchableOpacity>


            </View>
        </SafeAreaView>
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
export default Signup;