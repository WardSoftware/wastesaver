import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { RootTabScreenProps } from '../types';
import { Text, View } from '../components/Themed';
import ListItem from '../components/ListItem';


export default function TabThreeScreen({ navigation }: RootTabScreenProps<'TabThree'>) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <ListItem onPress={() => console.log("Profile")} text="Profile" name="user" />
                <ListItem onPress={() => console.log("Billing")} text="Billing" name="money" />
                <ListItem onPress={() => console.log("Data")} text="Data" name="file-text" />
                <ListItem onPress={() => console.log("Privacy")} text="Privacy" name="lock" />
                <ListItem onPress={() => navigation.navigate('Logon')} text="Log Out" name="arrow-circle-right" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
  