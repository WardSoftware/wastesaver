// Initial Page
// If success, go to navigation
// If register, go to register
// Avoid using navigation until logged in (easier that way)

import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Button, ActivityIndicator } from 'react-native'
import api from '../../config';
import Navigation from '../../navigation';
import { RootStackScreenProps } from '../../types';

export default function LogonScreen( {navigation}: RootStackScreenProps<'Logon'> ) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);
    const [disabled, setDisabled] = useState(false);
    
    return !success ? (
        <ScrollView keyboardDismissMode='interactive' 
            automaticallyAdjustContentInsets>
            <Text style={styles.logo}>
                WasteSaver
            </Text>
            {failed ? <View style={styles.notifier}><Text style={{color: 'red'}}>Incorrect Username or Password. Please try again.</Text></View> : null}
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
                
                <Button title="Log In" disabled={disabled} onPress={async () => {
                    // console.log("logon:")
                    // console.log("Username: " + username)
                    // console.log("password: " + password)
                    console.log(api)
                    fetch(api + "/login", {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: username,
                            password: password
                        })
                    }).then(r => r.json())
                    .then(json => {
                        if (json.response == "Success") {
                            navigation.navigate('Root')
                            
                            // Go to Navigation and kill this screen
                        } else {
                            setFailed(true)
                        }
                    })
                    // Go to main navigation... or error if invalid creds
                    }} />
                <Button title="Sign Up" disabled={disabled} onPress={() => {
                    fetch(api + "/signup", {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: username,
                            password: password
                        })
                    }).then(r => r.json())
                    .then(json => {
                        if (json.response == "Success") {
                            setSuccess(true)
                            setFailed(false)
                            setDisabled(true)
                            navigation.navigate("Root")

                            // Go to Navigation and kill this screen

                        } else {
                            setSuccess(false)
                            setFailed(true)
                        }
                    })
                
                }}/>
                <View style={{height: 400}}/>
                
            </View>
        </ScrollView>
    ) : (<View style={styles.loadingScreen}>
        <Text style={{padding: 20}}>Logging In</Text>
        <ActivityIndicator size="large" style={{ padding: 20}} color="#008888" />
    </View>)
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
    },
    notifier: {
        alignItems: 'center',
        padding: 15
    },
    loadingScreen: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    }
})