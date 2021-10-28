import React, { component, useState } from 'react';
import { StyleSheet, Text, View, button, TextInput, SearchBar, Tab } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


const Homescreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}></Text>
            <Text style={styles.text}>HomeScreen:</Text>
          
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
export default Homescreen;