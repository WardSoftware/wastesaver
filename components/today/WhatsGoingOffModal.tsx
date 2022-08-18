import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { View, Text } from '../Themed';
import FoodItem from './FoodItem';


const FoodItemList = () => {

    const [refreshing, setRefreshing] = useState(false)

    return (
        <ScrollView refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={() => {
                setRefreshing(true)
                setTimeout(() => {setRefreshing(false)}, 1000)
            }}
            />}
            style={{height: "100%"}}>
            
            <FoodItem title="Sandwich" />
            <FoodItem title="Bacon" />
            <FoodItem title="Butter" />
            <FoodItem title="Coca Cola (24 Pack)" />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />
            <FoodItem />

        </ScrollView>
    )
}




export default function WhatsGoingOffModal() {
    
    

    // const anim = useEffect(() => {
    //     setTimeout(() => setCurrent(current + 1), 2000)
    // }, [greeting, current])
    
    return (
        <View>
            <FoodItemList />
        </View>
    );
}

const styles = StyleSheet.create({
    
})