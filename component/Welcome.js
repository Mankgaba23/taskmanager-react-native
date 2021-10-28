import { StatusBar } from 'expo-status-bar';
import React, { component, useState } from 'react';
import { StyleSheet, Text, View, Alert, Button, Image, handlePress, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Welcome = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <Image
                style={{ width: '100%', height: 300 }}
                source={require('../assets/task.png')}
                resizeMode="contain"
            />
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Welcome</Text>

            <View style={{ flexDirection: "row", marginLeft: 20, justifyContent: 'space-evenly', justifyContent: 'space-around' }}>
                <TouchableOpacity
                    style={{ padding: 10, width: 150, borderRadius: 30, backgroundColor: 'gold', marginHorizontal: 2, borderColor: 'pink', borderWidth: 1 }}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ padding: 10, width: 150, borderRadius: 30, backgroundColor: '#FFFDD0', marginHorizontal: 2, borderWidth: 1, borderColor: 'pink' }}
                    onPress={() => navigation.navigate('Signup')}>
                    <Text style={{ textAlign: 'center', color: 'gold', fontSize: 18 }}>Signup</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginBotton: 20, alignItems: 'center', marginLeft: 20, marginRight: 20 }}>
                <View style={{ flex: 1, hight: 1, backgroundColor: 'pink' }} />
                <Text style={{ textAlign: 'center', width: 50 }}> OR</Text>
                <View style={{ flex: 1, height: 1, backgroundColor: 'pink' }}></View>
            </View>

            <TouchableOpacity
                style={{ padding: 10, width: 300, borderRadius: 30, backgroundColor: 'red', marginHorizontal: 2 }}
                onPress={handlePress}>
                <Text style={{ textAlign: 'center', color: 'pink', fontSize: 18 }}>Gooogle</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ padding: 10, width: 300 }}
                onPress={() => navigation.navigate('Forgotpassword')}>
                <Text style={{ textAlign: 'center', color: 'black', fontSize: 18 }}> Forgot Password</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
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
export default Welcome;