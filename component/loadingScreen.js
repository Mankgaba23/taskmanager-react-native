import React, { component, useEffect, useState } from 'react';
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';

require('firebase/auth')




const loadingScreen = ({ navigation }) => {
    useEffect(
        ()=>{firebase.auth().onAuthstateChanged((user)=>{
            if (user){
                navigation.replace('Homescreen');
            }else{
                navigation.replace('Welcome');
            }
        })}
    )


    return (
        <View style={styles.container}>
            <ActivityIndicator size =  'large'/>
            
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
export default loadingScreen;