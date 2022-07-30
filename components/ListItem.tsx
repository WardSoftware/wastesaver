import React from 'react';
import { Text, View } from './Themed';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function ListItem(props: any) {
    return (
        <TouchableOpacity style={styles.viewStyle} onPress={props.onPress}>
            <View>
                <Text style={styles.textStyle}>{props.text}</Text>
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