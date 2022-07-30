import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { RootTabScreenProps } from '../types';
import { Text, View } from '../components/Themed';
import EditScreenInfo from '../components/EditScreenInfo';
import ListItem from '../components/ListItem';



export default function TabThreeScreen({ navigation }: RootTabScreenProps<'TabThree'>) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Settings</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                <ListItem onPress={() => console.log("Profile")} text="Profile" />
                <ListItem onPress={() => console.log("Billing")} text="Billing" />
                <ListItem onPress={() => console.log("Log Out")} text="Log Out"/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: '200',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });
  