import React from 'react';
import { Text, View } from './Themed';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ListItem(props: any) {
    return (
        <TouchableOpacity onPress={props.onPress} style={{
            borderBottomWidth: 1,
            borderBottomColor: "#bbbbbb",
            // backgroundColor: 'red',
            height: 80,
            justifyContent: 'center',
            paddingLeft: 15
        }}>
            <View style={{flexDirection: 'row', flex: 1, alignContent: 'center', alignItems: 'center'}}>
                <FontAwesome style={{
                    fontSize: 35,
                    textAlign: 'center'
                }}
                    name={props.name}
                />
                <Text style={{padding: 15}}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    ); 
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: "#cccccc",
        marginBottom: 15,
        padding: 10,
        paddingLeft: 15,
        width: "100%"
    },
    textStyle: {
        padding: 10,

    }
    
})