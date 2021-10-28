import React, { component, useState } from 'react';
import { StyleSheet, Text, View, button, TextInput, email, password, handlePress, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { loggingOut } from '../service';


const w = Dimensions.get("window").width
const h = Dimensions.get("window").height

const Profile = ({ navigation }) => {
    const signOut = () => {
        loggingOut().then(
            navigation.navigate('Welcome')
        )
    }


    return (
        <ScrollView>
            <View style={{ padding: 16, flexDirection: "row", justifyContent: 'space-between' }}>
                <TouchableOpacity onPress ={()=>navigation.navigate('Homescreen')}>
                    <MaterialCommunityIcon
                    name="arrow-left"
                    size ={30}
                    style={{color:'black'}}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
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
export default Profile;