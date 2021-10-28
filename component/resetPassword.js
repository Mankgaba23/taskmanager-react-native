import React, { component,useState } from 'react';
import { StyleSheet, Text, View ,button , TextInput,email ,password ,handlePress } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';


const resetPassword = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Welcome Back</Text>
            <Text style={styles.text }>resetPassword:</Text>

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
export default resetPassword;