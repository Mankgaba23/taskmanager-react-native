import React, { component, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, email, password, handlePress } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { resertPassword } from '../service';

const Forgotpassword = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const reset = () => {
        resertPassword(email)
        console.log(email);
    }

    return (
        <View style={styles.container}>
            <Image
                style={{ width: '100%', height: 300 }}
                source={require('../assets/task.png')}
                resizeMode="contain"
            />
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Reset your Password</Text>

            <Text style={{ fontSize: 20, color: 'gold' }}
    
            >Enter an email address and we will you a reset password link </Text>

            <TextInput
                style={{ padding: 10, width: 300, borderRadius: 30, backgroundColor: 'white', marginHorizontal: 2 }}
                placeholder="Enter your email"
                autoCapitalize="none"
                value={email}
                onChangeText={(email) => setEmail(email)}
            />

            <TouchableOpacity style={{ padding: 10, width: 300, borderRadius: 20, backgroundColor: 'gold', marginHorizontal: 2 }}
                onPress={reset}>
                  
                <Text style={{ textAlign: 'center', color: 'black', fontSize: 18 }}>Reset</Text>
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
export default Forgotpassword;