import React from "react";
import { Text, View } from "../Themed";

const FoodItem = (props) => {
    return (
        <View style={{
            borderBottomWidth: 1,
            borderBottomColor: "#bbbbbb",
            // backgroundColor: 'red',
            height: 80,
            justifyContent: 'center',
            paddingLeft: 15
        }}>
            <View style={{flexDirection: 'row', flex: 1, alignContent: 'center', alignItems: 'center'}}>
                <View style={{
                    borderWidth: 1, 
                    width: '15%', 
                    height: '70%', 
                    borderColor: '#dddddd', 
                    backgroundColor: '#fbfbfb'}} 
                />
                <Text style={{padding: 15}}>{props.title}</Text>
            </View>
        </View>
    )
}

export default FoodItem;