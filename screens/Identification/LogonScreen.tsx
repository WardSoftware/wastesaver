// Initial Page
// If success, go to navigation
// If register, go to register
// Avoid using navigation until logged in (easier that way)

import React, { useRef, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Button } from 'react-native'
import { useHeaderHeight } from '@react-navigation/elements';
import api from '../../config';
export default function LogonScreen() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
   
    
    return (
        <ScrollView keyboardDismissMode='interactive' automaticallyAdjustContentInsets>
            <Text style={styles.logo}>
                WasteSaver
            </Text>
            <View>
                <Text style={styles.header}>
                    Username or Email Address
                </Text>
                <TextInput 
                    returnKeyType='next' 
                    style={styles.input} 
                    onChangeText={(event) => setUsername(event)}
                    value={username} />
                <Text style={styles.header}>
                    Password
                </Text>
                <TextInput 
                    returnKeyType='done' 
                    style={styles.input} 
                    secureTextEntry
                    onChangeText={(event) => setPassword(event)}
                    value={password} />
                
                <Button title="Log In" onPress={() => {
                    console.log("logon:")
                    console.log("Username: " + username)
                    console.log("password: " + password)
                    // Go to main navigation... or error if invalid creds
                    }} />

                <View style={{height: 400}}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    logon: {
        flex: 1
    },
    logo: {
        alignSelf: 'center',
        
        paddingTop: 100,
        paddingBottom: 150,
        fontWeight: '200',
        fontSize: 40
    },
    header: {
        alignSelf: 'center',
        margin: 25,

        
    },
    input: {
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#aaaaaa",
        backgroundColor: "#fafafa",
        padding: 20,
        marginBottom: 30,
        width: '75%'
    }
})