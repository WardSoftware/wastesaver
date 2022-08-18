import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { useState } from 'react';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import WhatsGoingOffModal from '../components/today/WhatsGoingOffModal';


const greeting = ["Hello.", "Welcome to WasteSaver.", "Let's see what's going off in your fridge..."]

export default function MyFridgeScreen({ navigation }: RootTabScreenProps<'MyFridge'>) {
  
  const [current, setCurrent] = useState(0);
  const [showOff, setShowOff] = useState(false);

  setTimeout(() => {
      if (current == 3) {
          setShowOff(true);
      } 
          clearTimeout()
          setCurrent(current + 1)
  }, 2000);
  
  return (
    <View style={styles.container}>
      { showOff ?
        <WhatsGoingOffModal /> :      
        <View>
          <Text style={styles.greeting}>{greeting[current]}</Text>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  
  greeting: {
    padding: 10,
    fontWeight: "200",
    color: "#006666",
    fontSize: 20
  }
});